import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSearchBooks } from "../../../contexts/useSearchBooks";
import BookItem from "./BookItem";
import { BooksContainer } from "./styled";

export function BookList() {
  const { books, handleNextPage } = useSearchBooks();

  return (
    <>
      <BooksContainer>
        {books === undefined
          ? [...Array(9)].map((value: undefined, index) => (
              <Skeleton width={150} height={230} />
            ))
          : books !== undefined &&
            books.map((book) => (
              <BookItem
                key={book._id}
                _id={book._id}
                authorName={book.author.fullName}
                bookName={book.title}
                imageUri={book.imageUri}
              />
            ))}
        <button onClick={() => handleNextPage(1)}>Load more</button>
      </BooksContainer>
    </>
  );
}
