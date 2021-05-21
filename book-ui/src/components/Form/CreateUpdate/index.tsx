import { useLazyQuery, useMutation } from "@apollo/client";
import "draft-js/dist/Draft.css";
import { FormikErrors, useFormik } from "formik";
import { PropsWithChildren, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useRichText } from "../../../contexts/useRichText";
import {
  CreateBookInput,
  CREATE_BOOK,
  SavedBook,
} from "../../../graphql/mutations/createBook";
import {
  UpdateBookInput,
  UpdatedBook,
  UPDATE_BOOK,
} from "../../../graphql/mutations/updateBook";
import {
  GetBook,
  GetBookQueryParams,
  GET_BOOK_TO_UPDATE,
} from "../../../graphql/queries/getBook";
import { RichTextEditor } from "../../Common/Editor";
import { TextField } from "../../Common/TextField";
import { Form, FormTitle } from "./styled";

interface FormValues {
  _id?: string;
  title: string;
  subTitle: string;
  author: {
    firstName: string;
    lastName: string;
  };
  imageUri: string;
  description: string;
}

const schema = yup.object().shape({
  title: yup
    .string()
    .min(5, "Too short! The title must have at least five caracteres")
    .max(120, "Too long, must be shorter than 120 caracteres")
    .required("Title of a book must be provided."),
  subTitle: yup
    .string()
    .min(5, "Too short! The sub title must have at least five caracteres")
    .max(120, "Too long, must be shorter than 120 caracteres"),
  author: yup.object().shape({
    firstName: yup
      .string()
      .max(120, "Too long, must be shorter than 120 caracteres")
      .required("First Name of an author must be provided."),
    lastName: yup
      .string()
      .max(120, "Too long, must be shorter than 120 caracteres")
      .required("Last Name of an author must be provided"),
  }),
  imageUri: yup.string(),
  description: yup.string(),
});

export function FormCreateUpdate({ children }: PropsWithChildren<{}>) {
  const { _id } = useParams<{ _id: string }>();
  const history = useHistory();
  const isAddMode = !_id;

  const [createBook, { loading: addLoading }] =
    useMutation<{ createBook: SavedBook }, CreateBookInput>(CREATE_BOOK);
  const [updateBook, { loading: updateLoading }] =
    useMutation<{ updateBook: UpdatedBook }, UpdateBookInput>(UPDATE_BOOK);
  const [getBook, { data: persistedBook }] = useLazyQuery<
    GetBook,
    GetBookQueryParams
  >(GET_BOOK_TO_UPDATE, {
    variables: {
      _id,
    },
    fetchPolicy: "cache-and-network",
  });

  const { getEditorHtml, getLength } = useRichText();
  const formik = useFormik<FormValues>({
    initialValues: {
      _id: undefined,
      title: "",
      subTitle: "",
      author: {
        firstName: "",
        lastName: "",
      },
      description: "",
      imageUri: "",
    },
    validate: (values) => {
      const descriptionLength = getLength();
      const errors: FormikErrors<FormValues> = {};
      if (descriptionLength < 30) {
        errors.description =
          "The description must have at least thirty caracteres";
      }
      if (descriptionLength > 1100) {
        errors.description =
          "The description must have less than one thousand and one hundred caracteres";
      }
      return errors;
    },
    validationSchema: schema,
    onSubmit: (value) => {
      const book = {
        ...value,
        description: getEditorHtml(),
      };

      delete book._id;
      if (isAddMode) {
        createBook({
          variables: {
            createBookInput: book,
          },
        })
          .then((values) => {
            toast.success(
              `📖 The book: ${values.data?.createBook.title} was Created successfully, redirecting to home`,
              {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                onClose: () => history.push("/book"),
              }
            );
          })
          .catch((err) => {
            if (err)
              toast.error(
                `💔 Something went wrong, please create an issue on my github!`
              );
          });
      } else {
        const book = {
          ...value,
          description: getEditorHtml(),
        };
        const { _id: id } = book;
        delete book._id;
        updateBook({
          variables: {
            _id: id as string,
            updateBookInput: book,
          },
        })
          .then((values) => {
            if (values.data) {
              history.push(`/book/${values.data?.updateBook._id}`);
            }
          })
          .catch((err) => {
            if (err)
              toast.error(
                `💔 Something went wrong, please notify @sapu_io in twitter`
              );
          });
      }
    },
  });
  useEffect(() => {
    if (persistedBook)
      formik.setValues((fields) => {
        return {
          _id: persistedBook.getBook._id,
          author: {
            firstName: persistedBook.getBook.author.firstName,
            lastName: persistedBook.getBook.author.lastName,
          },
          description: persistedBook.getBook.description,
          imageUri: persistedBook.getBook.imageUri,
          title: persistedBook.getBook.title,
          subTitle: persistedBook.getBook.subTitle,
        };
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persistedBook]);

  useEffect(() => {
    if (!isAddMode) {
      getBook({
        variables: {
          _id,
        },
      });
    }
  }, [isAddMode, getBook, _id]);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormTitle>{isAddMode ? "Add a new Book" : "Update the book"}</FormTitle>
      <TextField
        id="title"
        label="Title"
        type="text"
        name="title"
        helperText="Title of the Book"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={
          formik.touched.title && formik.errors.title
            ? formik.errors.title
            : undefined
        }
      />
      <TextField
        id="sub-title"
        label="Book Sub Title"
        type="text"
        name="subTitle"
        value={formik.values.subTitle}
        helperText="Sub Title of the Book"
        onChange={formik.handleChange}
        error={
          formik.touched.subTitle && formik.errors.subTitle
            ? formik.errors.subTitle
            : undefined
        }
      />
      <TextField
        id="author-first-name"
        label="Author First Name"
        name="author.firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.author.firstName}
        helperText="Author first name"
        error={
          formik.touched.author?.firstName && formik.errors.author?.firstName
            ? formik.errors.author?.firstName
            : undefined
        }
      />
      <TextField
        id="author-last-name"
        label="Author Last Name"
        name="author.lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.author.lastName}
        helperText="Author first name"
        error={
          formik.touched.author?.lastName && formik.errors.author?.lastName
            ? formik.errors.author?.lastName
            : undefined
        }
      />
      <TextField
        id="author-cover-image-uri"
        label="Cover Image (URI)"
        name="imageUri"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.imageUri}
        helperText="The uri from where image is been hosting."
        error={
          formik.touched.imageUri && formik.errors.imageUri
            ? formik.errors.imageUri
            : undefined
        }
      />
      <RichTextEditor
        label="Description"
        value={formik.values.description}
        helperText={
          formik.touched.description && formik.errors.description
            ? formik.errors.description
            : "The book description, synopsis."
        }
        error={
          formik.touched.description && formik.errors.description ? true : false
        }
      />
      <button type="submit" disabled={addLoading || updateLoading}>
        {addLoading
          ? "Creating your book..."
          : updateLoading
          ? "Updating yout book..."
          : isAddMode
          ? "Add new Book"
          : "Update the book"}
      </button>
    </Form>
  );
}
