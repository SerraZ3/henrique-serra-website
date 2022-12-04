import React from "react";

import Computer from "../../assets/img/Computer.svg";
import Bot from "../../assets/img/Bot.svg";
import Mobile from "../../assets/img/Mobile.svg";
import Image from "next/image";

//css
import {
  BoxDescription,
  BoxDiv,
  BoxParagraph,
  BoxTitle,
  KMParagraph,
  ServicosDiv,
} from "./styles";

const Servicos: React.FC = () => {
  return (
    <>
      <ServicosDiv>
        <BoxDiv>
          {/* Como importar imagens Next */}
          {/* <Image src="/assets/img/Computer.svg" height="200px" width="200px" /> */}
          <img
            src="/assets/img/Computer.svg"
            style={{ margin: "-90px 0 0 0" }}
          />

          <BoxTitle>Website</BoxTitle>
          <BoxDescription>Mostre o seu negócio! </BoxDescription>
          <BoxParagraph>
            Design claro, mecanismos de buscas otimizados e conversão de
            usuários para clientes
          </BoxParagraph>
        </BoxDiv>

        <BoxDiv>
          <img
            src="/assets/img/Mobile.svg"
            style={{ margin: "-115px 0 0 0" }}
          />
          <BoxTitle>Aplicativo</BoxTitle>
          <BoxDescription>Tudo na palma das mãos!</BoxDescription>
          <BoxParagraph>
            Realize atividades rotineiras em seu celular de forma rápida e fácil
            com um app híbrido (Android e IOS)
          </BoxParagraph>
        </BoxDiv>

        <BoxDiv>
          <img src="/assets/img/Bot.svg" style={{ margin: "-90px 0 0 0" }} />
          <BoxTitle>ChatBot</BoxTitle>
          <BoxDescription>Automatize seus atendimentos!</BoxDescription>
          <BoxParagraph>
            Melhore a comunicação e experiência de seus clientes
          </BoxParagraph>
        </BoxDiv>
      </ServicosDiv>
    </>
  );
};

export default Servicos;
