import { useDebouncedCallback } from "use-debounce/lib";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import { useBooks } from "../../hooks/useBooks";
import { Container, Input } from "./styled";

export function SearchInput() {
  const { handleSetTerm } = useBooks();

  const handleDebounceInput = useDebouncedCallback(
    (value: string) => handleSetTerm(value),
    500
  );
  return (
    <Container>
      <SearchIcon />
      <Input
        type="search"
        id="search"
        placeholder="Search book"
        onChange={(e) => handleDebounceInput(e.target.value)}
      />
    </Container>
  );
}
