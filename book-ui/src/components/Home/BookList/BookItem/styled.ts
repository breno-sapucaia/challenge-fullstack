import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  > img {
    border-radius: 0.5rem;
    width: 100%;
    object-fit: contain;
    min-height: 8.75rem;
  }

  > p.bookName {
    font-family: "sf-pro-display", "roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1em;
    margin-top: 0.5625rem;
    color: var(--primary-text-200);
  }

  > p.authorName {
    font-family: "roboto", sans-serif;
    margin-top: 0.375rem;
    font-weight: 900;
    line-height: 1em;
    font-size: 0.625rem;
    color: var(--primary-text-200);
    > span {
      text-transform: capitalize;
    }
  }
`;

export { Container };
