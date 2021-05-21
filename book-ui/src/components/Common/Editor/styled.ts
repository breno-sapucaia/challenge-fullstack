import styled, { css } from "styled-components";

const EditorLabel = styled.label`
  font-family: "sf-pro-text";
  color: var(--primary-text-500);
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 0.625rem;
`;

const EditorContainer = styled.div`
  position: relative;
  font-family: "sf-pro-text";
  font-size: 1rem;
  margin-bottom: 2.375rem;
  display: flex;
  flex-direction: column;

  > div.DraftEditor-root {
    padding: 0.625rem;
    min-height: 14.25rem;
    max-height: 14.25rem;
    border-radius: 0.625rem;
    box-shadow: var(--shadow-input);
    overflow: auto;
    > div.public-DraftEditor-content {
    }
  }
`;

interface HelperTextProps {
  error?: boolean;
}

const EditorHelperText = styled.small<HelperTextProps>`
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
export { EditorLabel, EditorContainer, EditorHelperText };
