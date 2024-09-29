import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "components/component/emotion/component";
import {
  Nav,
  NavItems,
  NavItem,
  NavLink,
} from "styles/layout/NavigationStyles";
import useUserStore from "store/store";

const Navigation = () => {
  const { userObj } = useUserStore();

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
          {/* userDisplayName이 없으면 로그인 표시 */}
          <NavLink to="/Vlog">
            {userObj?.displayName
              ? `${userObj.displayName}의 프로필`
              : "로그인해주세요"}
          </NavLink>
        </NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navigation;
