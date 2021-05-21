import { Editor } from "draft-js";
import React, { useEffect } from "react";
import { useRichText } from "../../../contexts/useRichText";
import { EditorContainer, EditorHelperText, EditorLabel } from "./styled";

interface RichTextEditorProps {
  label: string;
  helperText?: string;
  value?: string;
  error?: boolean;
}

export function RichTextEditor({
  label,
  helperText,
  value,
  error,
}: RichTextEditorProps) {
  const { editorState, handleTextLimitBeforeInput, setEditorState, setValue } =
    useRichText();

  useEffect(() => {
    if (value) setValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <EditorContainer>
      <EditorLabel>{label}</EditorLabel>
      <Editor
        handleBeforeInput={handleTextLimitBeforeInput}
        editorState={editorState}
        onChange={setEditorState}
      />
      <EditorHelperText error={error}>{helperText}</EditorHelperText>
    </EditorContainer>
  );
}
