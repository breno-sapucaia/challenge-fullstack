import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { useGetOneBook } from "../../../contexts/useGetOneBook";
import { Actions } from "../FloatBar";
import { Container } from "./styled";
export function Description() {
  const { book } = useGetOneBook();

  return (
    <Container>
      {book !== undefined ? (
        <>
          <h1>
            {book.title} <span>: {book.subTitle}</span>
          </h1>
          <h2>{book.author.fullName}</h2>
          <section className="description">
            {parse(`${book.description}`)}
          </section>
        </>
      ) : (
        <>
          <Skeleton count={2} />
          <Skeleton count={1} style={{ marginTop: 24 }} />

          <Skeleton count={6} />
        </>
      )}
      <Actions />
    </Container>
  );
}
