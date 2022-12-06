import React, { useState } from "react";
import { Div, NavDiv, Logo, NavLink, LinkDiv, LogoLink } from "./styles";

const Nav: React.FC = () => {
  return (
    <NavDiv>
      <Div>
        {/* importar font Roboto*/}
        <LogoLink href="#home">
          <Logo>Henrique Serra</Logo>
        </LogoLink>
      </Div>
      <LinkDiv>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#portfolio">Portifólio</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </LinkDiv>
    </NavDiv>
  );
};

export default Nav;
