import React, { useState } from "react";
import {
  Div,
  NavDiv,
  Logo,
  NavLink,
  LinkDiv,
  LogoLink,
  LimiterDiv,
} from "./styles";
import logo from "../../assets/logo.svg";

const Nav: React.FC = () => {
  return (
    <NavDiv>
      <LimiterDiv>
        <Div>
          {/* importar font Roboto*/}
          <LogoLink href="#home">
            <Logo src={logo} alt="logo" />
          </LogoLink>
        </Div>
        <LinkDiv>
          <NavLink href="#services">Serviços</NavLink>
          {/* <NavLink href="#about">Sobre</NavLink> */}
          <NavLink href="#portfolio">Portfólio</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </LinkDiv>
      </LimiterDiv>
    </NavDiv>
  );
};

export default Nav;
