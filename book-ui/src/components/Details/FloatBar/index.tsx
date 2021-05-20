import { ReactComponent as BookOpen } from "../../../assets/book-open.svg";
import { ReactComponent as HeadPhone } from "../../../assets/headphones.svg";
import { ReactComponent as Share } from "../../../assets/share.svg";
import { Container } from "./styled";

export function Actions() {
  return (
    <Container>
      <div className="bookopen">
        <BookOpen />
        <span>Read</span>
      </div>
      <div>
        <HeadPhone className="headphone" />
        <span>Listen</span>
      </div>
      <div>
        <Share className="share" />
        <span>Share</span>
      </div>
    </Container>
  );
}
