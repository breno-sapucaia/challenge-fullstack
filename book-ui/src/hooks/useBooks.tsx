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
  hasTerm: boolean;
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
      imageUri
    }
  }
`;

function BookContextProvider({ children }: PropsWithChildren<{}>) {
  const [search, setSearch] = useState({ page: 0, term: "" });
  const [hasTerm, setHasTerm] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [getBooksByName, { loading, data }] = useLazyQuery<
    BooksData,
    GetBookByNameVariables
  >(GET_BOOKS_BY_NAME, {
    variables: {
      term: search.term,
      page: search.page,
    },
  });

  const handleNextPage = () => {
    setSearch((prev) => {
      return { page: prev.page + 1, term: prev.term };
    });
  };

  const handleSetTerm = (term: string) => {
    setSearch({ page: 0, term });
  };

  useEffect(() => {
    getBooksByName({
      variables: { ...search },
    });
  }, [search, getBooksByName, search.page]);

  useEffect(() => {
    if (
      search.term.length > 0 &&
      data !== undefined &&
      data.getByName.length > 0
    ) {
      setBooks([...data.getByName]);
      setHasTerm(true);
    } else if (data !== undefined) {
      setBooks((prev) => [...prev, ...data.getByName]);
      setHasTerm(false);
    }
  }, [data, data?.getByName, search.term.length]);

  return (
    <Provider
      value={{
        books,
        hasTerm,
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
