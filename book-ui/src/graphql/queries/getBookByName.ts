import { gql } from "@apollo/client";

export interface BookByName {
  _id: string;
  title: string;
  imageUri: string;
  author: {
    fullName: string;
  };
  description: string;
}

export interface BooksData {
  getByName: BookByName[];
}

export interface GetBookByNameVariables {
  term: string;
  page?: number;
}

export const GET_BOOKS_BY_NAME = gql`
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
