import React from 'react';
import { Div, Icon, Logo, NavDiv } from './styles';

// import { Container } from './styles';

const NavResp: React.FC = () => {
  // const [renderSidebar, setRenderSidebar] = useState(false);
  // const [translate, setTranslate] = useState("-240px");

  // const showSidebar = () => {
  //   const newState = !renderSidebar;
  //   newState ? setTranslate("0") : setTranslate("-240px");
  //   setRenderSidebar(newState);
  // };

  const handleNavbar  = () => {
    alert("Eu sou um alert!");
  }
  return (
    <NavDiv>
      <Div>
        {/* importar font Roboto*/}
        <Logo>Henrique Serra</Logo>
      </Div>
      <Icon onClick={handleNavbar}/>
    </NavDiv>
  );
}

export default NavResp;