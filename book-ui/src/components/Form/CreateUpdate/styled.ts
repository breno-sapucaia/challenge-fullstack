import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 435px;
  padding-left: 3.75rem;
  padding-right: 3.75rem;
  padding-bottom: 6.125rem;
  flex-direction: column;

  max-height: calc(100vh);
  /* margin-bottom: 3.75rem; */
  background-color: var(--background-white);
  overflow: auto;

  @media (min-width: 376px) {
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    width: initial;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  > button {
    min-height: 3rem;
  }
  > div[role="form-control"] {
    margin-bottom: 2.375rem;
  }
`;

const FormTitle = styled.h1`
  font-family: "sf-pro-display";
  font-size: 1.5rem;
  padding-top: 3.125rem;
  margin-bottom: 3.5625rem;
  font-weight: 600;
  color: var(--secondary-text-500);
`;

export { Form, FormTitle };
