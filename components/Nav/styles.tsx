import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  position: sticky;
  top: 0;
  background-color: #1d1d1d;
  @media (min-width: 630px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: -12px 0;
    border-bottom: 1px solid #fff;
  }
`;

export const Logo = styled.p`
  display: none;
  @media (min-width: 630px) {
    display: block;
    font-family: "Roboto Mono";
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
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  &:hover {
    cursor: pointer;
    color: #11ff8d;
  }
`;
