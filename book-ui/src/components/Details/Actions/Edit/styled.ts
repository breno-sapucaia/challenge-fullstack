import styled from "styled-components";

export const EditContainer = styled.button`
  position: fixed;
  top: 6.125rem;
  left: 1.875rem;
  border-radius: 100%;

  transform: translate(-25%, -25%);
  background-color: transparent;
  border: 0;
  min-width: 3rem;
  min-height: 3rem;
  > svg {
    color: var(--background-black);
    width: 1rem;
  }
`;
