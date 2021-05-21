import styled from "styled-components";

export const Container = styled.section`
  width: 375px;
  margin: 0 auto;
  margin-top: 4.1875rem;
  max-height: calc(100vh - 21.8125rem);
  overflow: auto;
  display: flex;
  flex-direction: column;

  > h1 {
    font-family: "sf-pro-display";
    font-size: 1.5rem;
    > p {
      font-weight: 300;
    }
  }
  > h2 {
    font-family: "sf-pro-display";
    font-size: 1rem;
    color: var(--secondary-text-500);
    font-weight: 500;
  }
  > section.description {
    margin-top: 0.625rem;

    > p {
      font-family: "sf-pro-text";
      font-size: 0.875rem;
      line-height: 1.5rem;
      letter-spacing: 0.0125rem;
      margin-bottom: 1.5625rem;
      word-break: break-word;
      :last-child {
        margin-bottom: initial;
      }
    }
  }

  @media (max-width: 375px) {
    width: initial;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;
