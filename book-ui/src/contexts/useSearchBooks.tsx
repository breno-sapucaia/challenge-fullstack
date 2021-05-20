import { gql } from "@apollo/client/core";
import { useLazyQuery } from "@apollo/client/react";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
export interface Book {
  _id: string;
  title: string;
  imageUri: string;
  author: {
    fullName: string;
  };
  description: string;
}

interface BooksData {
  getByName: Book[];
}

interface GetBookByNameVariables {
  term: string;
  page?: number;
}

type BookContext = {
  books: Book[] | undefined;
  loading: boolean;
  handleSetTerm: (term: string) => void;
  handleNextPage: (page: number) => void;
};

const bookSearchContext = createContext<BookContext | undefined>(undefined);
const { Provider } = bookSearchContext;

const GET_BOOKS_BY_NAME = gql`
  query getBooksByName($term: String!, $page: Float!) {
    getByName(term: $term, page: $page) {
      _id
      title
      author {
        fullName
      }
      description
      imageUri
    }
  }
`;

function BookSearchContextProvider({ children }: PropsWithChildren<{}>) {
  const [page, setPage] = useState(0);
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [getBooksByName, { loading, data }] = useLazyQuery<
    BooksData,
    GetBookByNameVariables
  >(GET_BOOKS_BY_NAME, {
    variables: {
      term,
      page,
    },
  });

  const handleNextPage = (page: number) => {
    if (books.length % 9 === 0) setPage((prev) => prev + page);
    else
      toast.info("📚 No more books to load! 📚", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
  };

  const handleSetTerm = (term: string) => {
    setBooks([]);
    setTerm(term);
    setPage(0);
  };

  useEffect(() => {
    getBooksByName({
      variables: {
        term,
        page,
      },
    });
  }, [term, page, getBooksByName]);

  useEffect(() => {
    if (data) setBooks((prev) => [...prev, ...data.getByName]);
  }, [data]);

  return (
    <Provider
      value={{
        books,
        handleSetTerm,
        handleNextPage,
        loading,
      }}
    >
      {children}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
        limit={1}
        style={{
          width: 375,
        }}
      />
    </Provider>
  );
}

const useSearchBooks = () => {
  const context = useContext(bookSearchContext);
  if (context === undefined)
    throw new Error(
      "useSearchBooks must be within a BookContextProvider wrapper"
    );
  return context;
};

export { BookSearchContextProvider, useSearchBooks };
