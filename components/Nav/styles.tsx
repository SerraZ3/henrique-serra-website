import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const LinkDiv = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-around;
    width: 50vw;
  }
`;

export const NavDiv = styled.div`
  z-index: 1;
  position: fixed;
  width: 100%;
  max-width: 1200px;
  top: 0;
  background-color: #1d1d1d;
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: -12px 0;
    border-bottom: 1px solid #fff;
  }
`;

export const LogoLink = styled.a``;

export const Logo = styled.p`
  display: none;
  @media (min-width: 700px) {
    display: block;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 34px;
    color: #11ff8d;
    min-width: 160px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  &:hover {
    cursor: pointer;
    color: #11ff8d;
  }
`;
