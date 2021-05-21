import styled from "styled-components";

export const BooksContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
  gap: 1rem;
  margin-top: 2.25rem;
  margin-bottom: 3.75rem;
  overflow: auto;

  > button {
    grid-row-start: span;
    grid-column: span 3;
    height: 3rem;
  }
`;

export const Feedback = styled.p`
  font-family: "sf-pro-display";
  font-size: 1.25rem;
  grid-row-start: span;
  grid-column: span 3;
`;
