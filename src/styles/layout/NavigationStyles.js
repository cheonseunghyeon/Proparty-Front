import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 2000;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
`;

export const NavItems = styled.ul`
  float: right;
  margin-right: 20px;
  display: flex;
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  line-height: 80px;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
  font-family: "JAM";
  padding: 0 30px;
  transition: color 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;
