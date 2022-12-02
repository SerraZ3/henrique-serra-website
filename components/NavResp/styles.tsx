import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const LinkDiv = styled.div`
  display: none;
  @media (min-width: 630px) {
    display: flex;
    justify-content: space-around;
    width: 50vw;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: -12px 0;
  border-bottom: 1px solid #fff;
`;

export const Logo = styled.p`
  font-family: "Roboto Mono";
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

export const NavLink = styled.p`
  color: #fff;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
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
