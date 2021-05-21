/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from "react-router-dom";
import { ReactComponent as Add } from "../../../assets/add.svg";
import { ReactComponent as Home } from "../../../assets/home.svg";
import { ReactComponent as Profile } from "../../../assets/profile.svg";
import { FixedNav, LinkContainer } from "./styled";

export function BottomNavigation(props: { center?: boolean }) {
  const { pathname } = useLocation();
  return (
    <FixedNav $center={props.center}>
      <LinkContainer $customIsActive={pathname === "/book"} to="/book">
        <Home className="home" />
        <span>Home</span>
      </LinkContainer>
      <LinkContainer
        to="/book/create"
        $customIsActive={pathname === "/book/create"}
      >
        <Add className="add" />
        <span>Add Book</span>
      </LinkContainer>
      <LinkContainer to="#" $customIsActive={pathname === "/profile"}>
        <Profile className="profile" />
        <span>Profile</span>
      </LinkContainer>
    </FixedNav>
  );
}
