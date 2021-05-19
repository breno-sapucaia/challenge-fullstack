import React from "react";
import { useBooks } from "../../hooks/useBooks";
import BookItem from "./BookItem";
import { BooksContainer } from "./styled";

export function BookList() {
  const { books } = useBooks();
  return (
    <BooksContainer>
      {console.log(books)}
      {books === undefined ? (
        //change to skelleton
        <p>Fetching books...</p>
      ) : (
        books !== undefined &&
        books.map((book) => (
          <BookItem
            key={book._id}
            _id={book._id}
            authorName={book.author.fullName}
            bookName={book.name}
            imageUri={book.imageUri}
          />
        ))
      )}
    </BooksContainer>
  );
}
