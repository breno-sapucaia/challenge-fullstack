import { ChangeEvent, useRef } from "react";
import { Input } from "../../Home/SearchInput/styled";
import { FormControl, HelperText, InputContainer, Label } from "./styled";
type TextFieldProps = {
  type: string;
  name: string;
  id: string;
  onChange: (e: ChangeEvent<any>) => void;
  label?: string;
  error?: string;
  value: string | number;
  helperText?: string;
  [rest: string]: any;
};

export function TextField({
  label,
  id,
  error,
  onChange,
  value,
  type,
  helperText,
  name,
  rest,
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>();

  return (
    <FormControl
      role="form-control"
      id={`form-control-${id}`}
      onClick={() => inputRef.current?.focus()}
    >
      {label ? (
        <Label id={`label-${id}`} htmlFor={`input-${id}`}>
          {label}
        </Label>
      ) : null}
      <InputContainer>
        <Input
          ref={inputRef}
          id={`input-${id}`}
          onChange={onChange}
          name={name}
          value={value}
          type={type}
          {...rest}
        />
      </InputContainer>
      {helperText !== undefined ? (
        <HelperText error={!!error}>{error ? error : helperText}</HelperText>
      ) : null}
    </FormControl>
  );
}
