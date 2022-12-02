import React, { useState } from "react";

import { Link } from "react-router-dom";

//css
import {
  Div,
  Icon,
  Logo,
  NavDiv,
  NavLink,
  ScreenDiv,
  ScreenNav,
} from "./styles";

const NavResp: React.FC = () => {
  const [renderNavbar, setRenderNavbar] = useState(false);
  const [showNav, setShowNav] = useState("none");

  const handleNavbar = () => {
    const newState = !renderNavbar;
    newState ? setShowNav("block") : setShowNav("none");
    setRenderNavbar(newState);
  };
  return (
    <>
      <NavDiv>
        <Div>
          {/* importar font Roboto*/}
          <Logo>Henrique Serra</Logo>
        </Div>
        <Icon onClick={handleNavbar} />
      </NavDiv>
      <ScreenDiv display={showNav}>
        <ScreenNav>
          <NavLink>
            <a href="#">Serviços</a>
          </NavLink>
          <NavLink>
            <a href="#">Sobre</a>
          </NavLink>
          <NavLink>
            <a href="#">Portifólio</a>
          </NavLink>
          <NavLink>
            <a href="#">Contato</a>
          </NavLink>
        </ScreenNav>
      </ScreenDiv>
    </>
  );
};

export default NavResp;
