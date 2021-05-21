import { useQuery } from "@apollo/client";
import { createContext, PropsWithChildren, useContext } from "react";
import { useParams } from "react-router";
import {
  Book,
  GetBook,
  GetBookQueryParams,
  GET_BOOK,
} from "../graphql/queries/getBook";

interface Context {
  book: Book | undefined;
  loading: boolean;
}

const bookContext = createContext<Context | undefined>(undefined);
const { Provider } = bookContext;

const BookContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const { _id } = useParams<{ _id: string }>();

  const { loading, data } = useQuery<GetBook, GetBookQueryParams>(GET_BOOK, {
    variables: {
      _id,
    },
    fetchPolicy: "cache-and-network",
  });

  return (
    <Provider
      value={{
        book: data?.getBook,
        loading,
      }}
    >
      {children}
    </Provider>
  );
};

const useGetOneBook = () => {
  const context = useContext(bookContext);
  if (context === undefined)
    throw new Error(`useBook must be within a BookContextProvider.`);
  return context;
};

export { BookContextProvider, useGetOneBook };
