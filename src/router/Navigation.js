import React from "react";
import { Link } from "react-router-dom";
import { Logo, Search } from "components/component/emotion/component";
import {
  Nav,
  NavItems,
  NavItem,
  NavLink,
} from "styles/layout/NavigationStyles";

const Navigation = ({ userObj }) => {
  console.log(userObj);
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <NavItems>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Project">팀 프로젝트</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/Com">커뮤니티</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Vlog">{userObj.displayName}의 프로필</NavLink>
        </NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navigation;
