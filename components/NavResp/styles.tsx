import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const NavDiv = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: -12px 0;
  border-bottom: 1px solid #fff;
  background-color: #1d1d1d;
  @media (min-width: 630px) {
    display: none;
  }
`;

export const Logo = styled.p`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 34px;
  color: #11ff8d;
  @media (min-width: 630px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(FaBars)`
  color: #fff;
  font-size: 45px;
  padding: 5px;
  cursor: pointer;
  align-self: center;
  /* margin-left: 30px; */
  @media (min-width: 630px) {
    display: none;
  }
`;

// .menuOpen nav a:hover {
//   color: #8257E6;
//   transform: scale(1.4);
// }
export const ScreenDiv = styled.div<{ display: string }>(
  (props) => css`
    display: ${props.display};
    height: 100vh;
    @media (min-width: 630px) {
      display: none;
    }
  `
);

export const ScreenNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
`;

export const NavLink = styled.p`
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
`;
