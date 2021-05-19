import { gql } from "@apollo/client/core";
import { useLazyQuery } from "@apollo/client/react";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface Book {
  _id: string;
  name: string;
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

const bookContext = createContext<BookContext | undefined>(undefined);
const { Provider } = bookContext;

const GET_BOOKS_BY_NAME = gql`
  query getBooksByName($term: String!, $page: Float!) {
    getByName(term: $term, page: $page) {
      _id
      name
      author {
        fullName
      }
      description
    }
  }
`;

function BookContextProvider({ children }: PropsWithChildren<{}>) {
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(0);

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
    setPage((previousPage) => previousPage + 1);
  };

  const handleSetTerm = (term: string) => {
    setTerm(term);
  };

  useEffect(() => {
    getBooksByName({
      variables: {
        term,
        page,
      },
    });
  }, [term, page, getBooksByName]);

  return (
    <Provider
      value={{
        books: data?.getByName,
        handleSetTerm,
        handleNextPage,
        loading,
      }}
    >
      {children}
    </Provider>
  );
}

const useBooks = () => {
  const context = useContext(bookContext);
  if (context === undefined)
    throw new Error("useBooks must be within a BookContextProvider wrapper");
  return context;
};

export { BookContextProvider, useBooks };
