import styled from "styled-components";

const MainContainer = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: var(--background-white);
  overflow: auto;

  @media (min-width: 376px) {
    width: initial;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export { MainContainer };
