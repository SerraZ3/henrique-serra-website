import React from "react";
import { FooterContainer, FooterText } from "./styles";

const FooterBar: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        Desenvolvido por Henrique Serra. CNPJ: 39.554.214/0001-45
      </FooterText>
    </FooterContainer>
  );
};

export default FooterBar;
