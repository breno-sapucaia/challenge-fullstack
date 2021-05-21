import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../../assets/pen.svg";
import { EditContainer } from "./styled";

export function Edit() {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <EditContainer onClick={() => history.push(`${pathname}/update`)}>
      <EditIcon />
    </EditContainer>
  );
}
