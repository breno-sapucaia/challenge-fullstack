import styled from "styled-components";

const Container = styled.div`
  height: 3rem;
  border-radius: 0.625rem;

  display: flex;
  padding: 1rem;
  gap: 0.75rem;
  align-items: center;
  background-color: #fdfdfd;
`;

const Input = styled.input`
  font-family: "sf-pro-text";
  font-weight: 600;
  font-size: 1rem;
  height: fit-content;
  width: 100%;
  line-height: 1.125rem;
  ::placeholder {
    font-weight: 400;
    color: var(--placeholder);
  }
`;

export { Container, Input };
