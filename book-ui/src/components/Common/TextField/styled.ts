import styled, { css } from "styled-components";

interface FormControlProps {
  marginBottom?: number;
  marginTop?: number;
}

const FormControl = styled.div<FormControlProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 6.25rem;

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${marginBottom}px;
        `
      : null}
  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-bottom: ${marginTop}px;
        `
      : null}

  > button {
    height: 3rem;
  }
`;

const Label = styled.label`
  font-family: "sf-pro-text";
  color: var(--primary-text-500);
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 0.625rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow-input);
  padding: 0 0.625rem;
  height: 3rem;
  border-radius: 0.625rem;
`;

const Input = styled.div`
  font-family: "sf-pro-text";
  font-weight: 600;
  line-height: 1.125rem;
  font-size: 1rem;
  height: fit-content;
  width: 100%;
  line-height: 1.125rem;
  margin-left: 0.625;
  ::placeholder {
    font-weight: 400;
    color: var(--placeholder);
  }
`;

interface HelperTextProps {
  error?: boolean;
}

const HelperText = styled.small<HelperTextProps>`
  font-family: "sf-pro-text";
  font-size: 0.75rem;

  ${({ error }) =>
    error
      ? css`
          color: var(--secondary-text-500);
        `
      : css`
          color: var(--primary-text-500-gray);
        `}
`;

export { FormControl, Label, InputContainer, Input, HelperText };
