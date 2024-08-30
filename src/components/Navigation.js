import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";
import { Logo, Search } from "routes/component/emotion/component";
const Navigation = ({ userObj }) => {
  console.log(userObj);
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>

      <ul class="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">팀 프로젝트</Link>
        </li>
        <li>
          <Link to="/Vlog">블로그</Link>
        </li>
        <li>
          <Link to="/Com">커뮤니티</Link>
        </li>
        <li>
          <Link to="/profile">{userObj.displayName}의 프로필</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
