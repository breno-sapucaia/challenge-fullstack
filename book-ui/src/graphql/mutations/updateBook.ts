import { gql } from "@apollo/client";

export interface UpdatedBook {
  _id: string;
}
export interface UpdateBookInput {
  _id: string;
  updateBookInput: {
    title: string;
    subtitle?: string;
    imageUri?: string;
    author: {
      firstName: string;
      lastName: string;
    };
    description: string;
  };
}
export interface ReturnUpdate {
  updateBook: {
    _id: string;
  };
}

export const UPDATE_BOOK = gql`
  mutation updateBook($_id: String!, $updateBookInput: UpdateBookInput!) {
    updateBook(_id: $_id, updateBookInput: $updateBookInput) {
      _id
    }
  }
`;
