/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import { ReactComponent as Add } from "../../../assets/add.svg";
import { ReactComponent as Home } from "../../../assets/home.svg";
import { ReactComponent as Profile } from "../../../assets/profile.svg";
import { FixedNav } from "./styled";
export function BottomNavigation() {
  return (
    <FixedNav>
      <NavLink to="/book">
        <Home className="home" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/book/create">
        <Add className="add" />
        <span>Add Book</span>
      </NavLink>
      <a href="#">
        <Profile className="profile" />
        <span>Profile</span>
      </a>
    </FixedNav>
  );
}
