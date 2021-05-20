import styled from "styled-components";

export const BooksContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2.25rem;
  margin-bottom: 3.75rem;
  overflow: auto;

  > button {
    grid-row-start: span;
    grid-column: span 3;
    height: 3rem;

    border-radius: 0.625rem;
    border: 0;

    background-color: var(--secondary-text-500);
    color: var(--background-white);

    font-family: "sf-pro-display";
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
