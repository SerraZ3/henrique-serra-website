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

const Nav: React.FC = () => {
  return (
    <NavDiv>
      <LimiterDiv>
        <Div>
          {/* importar font Roboto*/}
          <LogoLink href="#home">
            <Logo>Henrique Serra</Logo>
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
