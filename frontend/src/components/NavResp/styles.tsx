import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const NavDiv = styled.div`
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 1px solid #fff;
  background-color: #1d1d1d;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const LogoLink = styled.a``;

export const Logo = styled.p`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 34px;
  color: #11ff8d;
  @media (min-width: 700px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(FaBars)`
  color: #fff;
  font-size: 55px;
  padding: 12px;
  cursor: pointer;
  align-self: center;
  /* margin-left: 30px; */
  @media (min-width: 700px) {
    display: none;
  }
`;

export const ScreenDiv = styled.div<{ display: string }>(
  (props) => css`
    /* suavizar transição */
    bottom: -56px;
    z-index: 0.5;
    display: block;
    height: ${props.display};
    position: fixed;
    z-index: 10;
    width: 100%;
    background-color: #1d1d1daa;
    backdrop-filter: blur(5px);
    transition: 0.4s;
    @media (min-width: 700px) {
      display: none;
    }
  `
);

export const ScreenNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 7rem;
`;

export const NavLink = styled.a<{ display: string }>(
  (props) => css`
    display: ${props.display};
    margin-block-start: 1em;
    margin-block-end: 1em;

    color: #fff;
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 20px;
    &:hover {
      color: #11ff8d;
      transform: scale(1.4);
      cursor: pointer;
    }
  `
);
