import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  z-index: 2000;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.05),
    0 0.0625rem 0 rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;

  @media (max-width: 768px) {
    height: 4rem;
    padding: 0 0.625rem;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 0.625rem;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  line-height: 5rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
  font-family: "JAM";
  padding: 0 1.875rem;
  transition: color 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem;
    font-size: 1rem;
  }
`;
