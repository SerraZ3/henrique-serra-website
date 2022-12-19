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
          {/* // ! fazer nav sumir dps q clicar em algo*/}
          <LogoLink href="#home">
            <Logo>Henrique Serra</Logo>
          </LogoLink>
        </Div>
        <Icon onClick={handleNavbar} />
      </NavDiv>
      <ScreenDiv display={showNav}>
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
    </>
  );
};

export default NavResp;
