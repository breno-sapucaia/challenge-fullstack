import { gql } from "@apollo/client";

export interface CountBooks {
  countBooks: number;
}

export const COUNT_BOOK = gql`
  query countBooks {
    countBooks
  }
`;
