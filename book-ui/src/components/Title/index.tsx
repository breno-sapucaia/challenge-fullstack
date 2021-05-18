import React from "react";
import { StyledTitle } from "./styled";

interface TitleProps {
  user: string;
}

export function Title({ user }: TitleProps) {
  return (
    <StyledTitle>
      H1, <strong>{user}</strong> 👋
    </StyledTitle>
  );
}
