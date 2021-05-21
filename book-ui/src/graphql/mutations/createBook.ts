import { gql } from "@apollo/client";

export interface SavedBook {
  _id: string;
  title: string;
}
export interface CreateBookInput {
  createBookInput: {
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

export const CREATE_BOOK = gql`
  mutation createBook($createBookInput: CreateBookInput!) {
    createBook(createBookInput: $createBookInput) {
      _id
      title
    }
  }
`;
