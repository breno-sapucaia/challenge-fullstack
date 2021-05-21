import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSearchBooks } from "../../../contexts/useSearchBooks";
import BookItem from "./BookItem";
import { BooksContainer, Feedback } from "./styled";

export function BookList() {
  const { books, handleNextPage, loading, limitReached } = useSearchBooks();

  return (
    <>
      <BooksContainer>
        {books === undefined ? (
          [...Array(9)].map((value: undefined, index) => (
            <Skeleton width={150} height={230} />
          ))
        ) : books !== undefined && books.length > 0 ? (
          books.map((book) => (
            <BookItem
              key={book._id}
              _id={book._id}
              authorName={book.author.fullName}
              bookName={book.title}
              imageUri={book.imageUri}
            />
          ))
        ) : (
          <>
            {loading ? (
              <Feedback>Loading...</Feedback>
            ) : (
              <Feedback>no books were found 💔</Feedback>
            )}
          </>
        )}
        <button
          disabled={loading || limitReached}
          onClick={() => handleNextPage(1)}
        >
          {loading
            ? "loading..."
            : limitReached
            ? "Out of Books! 🚫"
            : "Load more"}
        </button>
      </BooksContainer>
    </>
  );
}
