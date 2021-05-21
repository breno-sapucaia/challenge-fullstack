import { gql } from "@apollo/client";

export interface Book {
  _id: string;
  title: string;
  subTitle: string;
  imageUri: string;
  author: {
    firstName: string;
    lastName: string;
    fullName: string;
  };
  description: string;
}
export interface GetBook {
  getBook: Book;
}
export interface GetBookQueryParams {
  _id: string;
}

export const GET_BOOK = gql`
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
export const GET_BOOK_TO_UPDATE = gql`
  query getBook($_id: String!) {
    getBook(_id: $_id) {
      _id
      title
      subTitle
      imageUri
      author {
        firstName
        lastName
      }
      description
    }
  }
`;
