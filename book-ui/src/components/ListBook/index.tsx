import React from "react";
import { AuthorName, BookImage, BookName, Container } from "./styled";

interface BookItem {
  url: string;
  bookName: string;
  authorName: string;
}

export function BookItem({ url, bookName, authorName }: BookItem) {
  return (
    <Container>
      <BookImage />
      <BookName></BookName>
      <AuthorName></AuthorName>
    </Container>
  );
}
