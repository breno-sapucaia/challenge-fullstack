import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styled";
export interface BookItemProps {
  _id: string;
  imageUri: string;
  bookName: string;
  authorName: string;
}

export default function BookItem({
  _id,
  imageUri,
  bookName,
  authorName,
}: BookItemProps) {
  return (
    <NavLink to={`/book/${_id}`}>
      <Container>
        <img src={imageUri} alt={`cover of ${bookName}`} />
        <p className="bookName">{bookName}</p>
        <p className="authorName">
          by <span>{authorName}</span>
        </p>
      </Container>
    </NavLink>
  );
}
