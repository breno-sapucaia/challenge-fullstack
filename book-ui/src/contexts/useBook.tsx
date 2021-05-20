import { gql, useQuery } from "@apollo/client";
import { createContext, PropsWithChildren, useContext } from "react";
import { useParams } from "react-router";

interface Book {
  _id: string;
  title: string;
  subTitle: string;
  imageUri: string;
  author: {
    fullName: string;
  };
  description: string;
}
interface GetBook {
  getBook: Book;
}

interface Context {
  book: Book | undefined;
  loading: boolean;
}

const bookContext = createContext<Context | undefined>(undefined);
const { Provider } = bookContext;

interface GetBookQueryParams {
  _id: string;
}

const GET_BOOK = gql`
  query getBook($_id: String!) {
    getBook(_id: $_id) {
      _id
      title
      subTitle
      imageUri
      author {
        fullName
      }
      description
    }
  }
`;

const BookContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const { _id } = useParams<{ _id: string }>();

  const { loading, data } = useQuery<GetBook, GetBookQueryParams>(GET_BOOK, {
    variables: {
      _id,
    },
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

const useBook = () => {
  const context = useContext(bookContext);
  if (context === undefined)
    throw new Error(`useBook must be within a BookContextProvider.`);
  return context;
};

export { BookContextProvider, useBook };
