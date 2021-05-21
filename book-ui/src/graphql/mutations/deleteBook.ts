import { gql } from "@apollo/client";

export interface DeleteData {
  deleteBook: boolean;
}

export interface DeleteArgs {
  _id: string;
}

export const DELETE_BOOK = gql`
  mutation deleteBook($_id: String!) {
    deleteBook(_id: $_id)
  }
`;
