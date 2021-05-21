import { useLazyQuery, useQuery } from "@apollo/client/react";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CountBooks, COUNT_BOOK } from "../graphql/queries/countBooks";
import {
  BookByName,
  BooksData,
  GetBookByNameVariables,
  GET_BOOKS_BY_NAME,
} from "../graphql/queries/getBookByName";

type BookContext = {
  books: BookByName[] | undefined;
  loading: boolean;
  limitReached: boolean;
  handleSetTerm: (term: string) => void;
  handleNextPage: (page: number) => void;
};

const bookSearchContext = createContext<BookContext | undefined>(undefined);
const { Provider } = bookSearchContext;

function BookSearchContextProvider({ children }: PropsWithChildren<{}>) {
  const { data: bookMax } = useQuery<CountBooks>(COUNT_BOOK);
  const [limitReached, setLimitReached] = useState(false);
  const [page, setPage] = useState(0);
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState<BookByName[]>([]);
  const [getBooksByName, { loading, data }] = useLazyQuery<
    BooksData,
    GetBookByNameVariables
  >(GET_BOOKS_BY_NAME, {
    variables: {
      term,
      page,
    },
    fetchPolicy: "network-only",
  });

  const canFetchNextPage = () => {
    if (bookMax) return books.length < bookMax.countBooks;
    return false;
  };

  const handleNextPage = (page: number = 1) => {
    if (canFetchNextPage()) {
      setPage((prev) => prev + page);
    } else {
      setLimitReached(!limitReached);
    }
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
        limitReached,
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
