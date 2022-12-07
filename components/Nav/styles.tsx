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
export const LimiterDiv = styled.div`
  max-width: 1280px;
  width: 100%;
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
export const NavDiv = styled.nav`
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ffffffdd;
  height: 56px;
  @media (min-width: 992px) {
    height: 64px;
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
