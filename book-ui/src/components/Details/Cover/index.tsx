import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useGetOneBook } from "../../../contexts/useGetOneBook";
import { CoverContainer, ImageContainer } from "./styled";

export function CoverBook() {
  const { book } = useGetOneBook();
  useEffect(() => {
    console.log(book);
  }, [book]);
  return (
    <>
      <CoverContainer>
        <div className="wrapper">
          {/* <img className="ovals" src={Ovals} alt="Ovals details" /> */}
        </div>
      </CoverContainer>
      <ImageContainer>
        {book !== undefined ? (
          <img className="cover" src={book.imageUri} alt="Book Cover" />
        ) : (
          <Skeleton className="cover" width={150} height={200} />
        )}
        <div className="shadow"></div>
      </ImageContainer>
    </>
  );
}
