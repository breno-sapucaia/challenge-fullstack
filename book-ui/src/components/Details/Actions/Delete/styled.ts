import styled from "styled-components";

export const DeleteContainer = styled.button`
  position: fixed;
  top: 9.125rem;
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

export const DeleteModal = styled.div`
  background-color: var(--background-white);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`;
