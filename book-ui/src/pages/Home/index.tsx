import React from "react";
import { BookList } from "../../components/BookList";
import { SearchInput } from "../../components/SearchInput";
import { Title } from "../../components/Title";
import { useBooks } from "../../hooks/useBooks";

export function Home() {
  const { handleNextPage } = useBooks();
  return (
    <>
      <SearchInput />
      <Title user="Mehmed AI Fatih" />
      <BookList />
      <button onClick={() => handleNextPage(1)}> Load More</button>
    </>
  );
}
