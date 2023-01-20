import React, { useState } from "react";

//css
import {
  Div,
  Icon,
  Logo,
  LogoLink,
  NavDiv,
  NavLink,
  ScreenDiv,
  ScreenNav,
} from "./styles";

const NavResp: React.FC = () => {
  const [renderNavbar, setRenderNavbar] = useState(false);
  const [showNav, setShowNav] = useState("0");
  const [navOptions, setNavOptions] = useState("none");

  const handleNavbar = () => {
    const newState = !renderNavbar;
    newState ? setShowNav("100vh") : setShowNav("0");
    newState ? setNavOptions("block") : setNavOptions("none");
    setRenderNavbar(newState);
  };
  return (
    <>
      <NavDiv>
        <Div>
          <LogoLink href="#home">
            <Logo>Henrique Serra</Logo>
          </LogoLink>
        </Div>
        <Icon onClick={handleNavbar} />
        <ScreenDiv display={showNav} onClick={handleNavbar}>
          <ScreenNav>
            <NavLink display={navOptions} href="#services">
              Serviços
            </NavLink>
            {/* <NavLink display={navOptions} href="#about">
            Sobre
          </NavLink> */}
            <NavLink display={navOptions} href="#portfolio">
              Portfólio
            </NavLink>
            <NavLink display={navOptions} href="#contact">
              Contato
            </NavLink>
          </ScreenNav>
        </ScreenDiv>
      </NavDiv>
    </>
  );
};

export default NavResp;
