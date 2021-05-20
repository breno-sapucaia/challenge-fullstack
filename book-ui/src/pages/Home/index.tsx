import React from "react";
import { BookList } from "../../components/Home/BookList";
import { BottomNavigation } from "../../components/Home/BottomNavigation";
import { SearchInput } from "../../components/Home/SearchInput";
import { Title } from "../../components/Home/Title";
import { MainContainer } from "./styled";

export function Home() {
  return (
    <MainContainer>
      <SearchInput />
      <Title user="Mehmed AI Fatih" />
      <BookList />
      <BottomNavigation />
    </MainContainer>
  );
}
