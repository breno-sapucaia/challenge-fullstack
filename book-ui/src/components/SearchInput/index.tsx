import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import { Container, Input } from "./styled";

export function SearchInput() {
  const [value, setValue] = useState("");

  return (
    <Container>
      <SearchIcon />
      <Input id="search" placeholder="Search book" />
    </Container>
  );
}
