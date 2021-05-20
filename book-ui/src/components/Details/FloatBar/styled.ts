import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 3.125rem;
  width: 20.9375rem;

  height: 3.5rem;
  background-color: var(--background-white);

  > div {
    flex: 1;
    display: flex;
    gap: 0.625rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-right: 1px solid var(--border-gray);
    cursor: pointer;

    :last-child {
      border-right: 0;
    }

    > span {
      font-family: "sf-pro-display";
      font-weight: 700;
      font-size: 14px;
    }
  }

  @media (min-width: 376px) {
    margin-left: 1.25rem;
  }
`;
