import { useHistory } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../../assets/back.svg";
import { BackButton } from "./styled";

export function Back() {
  const history = useHistory();
  return (
    <BackButton onClick={() => history.goBack()}>
      <BackIcon />
    </BackButton>
  );
}
