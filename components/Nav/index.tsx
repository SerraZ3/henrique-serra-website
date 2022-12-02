import React, { useState } from "react";
import { Div, NavDiv, Logo, NavLink, LinkDiv} from "./styles";

const Nav: React.FC = () => {
  
  return (
    <NavDiv>
      <Div>
        {/* importar font Roboto*/}
        <Logo>Henrique Serra</Logo>
      </Div>
      <LinkDiv>
        <NavLink>Serviços</NavLink>
        <NavLink>Sobre</NavLink>
        <NavLink>Portifólio</NavLink>
        <NavLink>Contato</NavLink>
      </LinkDiv>
    </NavDiv>
  );
};

export default Nav;
