import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { useBook } from "../../../contexts/useBook";
import { Actions } from "../FloatBar";
import { Container } from "./styled";
export function Description() {
  const { book } = useBook();

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
          <section className="description">
            {parse(`${book.description}`)}
          </section>
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
