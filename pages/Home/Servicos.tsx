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
  Div,
  FullScreen,
  KMParagraph,
  ServicosDiv,
  // FaceDiv,
  // FrenteDiv,
  // FundoDiv,
} from "./styles";

interface Servicos {
  id: string;
}

const Servicos: React.FC<Servicos> = ({ id }) => {
  return (
    <ServicosDiv id={id}>
      <BoxDiv>
        {/* <Image src="/assets/img/Computer.svg" height="200px" width="200px" /> */}
        <img src="/assets/img/Computer.svg" style={{ margin: "-90px 0 0 0" }} />

        <BoxTitle>Website</BoxTitle>
        <BoxDescription>Mostre o seu negócio! </BoxDescription>
        <BoxParagraph>
          Design claro, mecanismos de buscas otimizados e conversão de usuários
          para clientes
        </BoxParagraph>
      </BoxDiv>

      <BoxDiv>
        <img src="/assets/img/Mobile.svg" style={{ margin: "-115px 0 0 0" }} />
        <BoxTitle>Aplicativo</BoxTitle>
        <BoxDescription>Tudo na palma das mãos!</BoxDescription>
        <BoxParagraph>
          Realize atividades rotineiras em seu celular de forma rápida e fácil
          com um app híbrido (Android e IOS)
        </BoxParagraph>
      </BoxDiv>

      <BoxDiv>
        <img
          src="/assets/img/WordpressIcon.svg"
          style={{ margin: "-90px 0 0 0" }}
        />
        <BoxTitle>Wordpress</BoxTitle>
        <BoxDescription>Sites fáceis de manutenção</BoxDescription>
        <BoxParagraph>
          Toda as vantagens de um website com a capacidade de atualizações feita
          por você
        </BoxParagraph>
      </BoxDiv>

      <BoxDiv>
        <img
          src="/assets/img/EcommerceIcon.svg"
          style={{ margin: "-115px 0 0 0" }}
        />
        <BoxTitle>Ecommerce</BoxTitle>
        <BoxDescription>Aumente sua venda no digital</BoxDescription>
        <BoxParagraph>
          Mostre e venda seus produtos através de uma plataforma 100% sua
        </BoxParagraph>
      </BoxDiv>

      <BoxDiv>
        <img
          src="/assets/img/BusinessIcon.svg"
          style={{ margin: "-90px 0 0 0" }}
        />
        <BoxTitle>Meu negócio</BoxTitle>
        <BoxDescription>Sua empresa cadastrada no google</BoxDescription>
        <BoxParagraph>
          Registre sua empresa no google e permita que seus clientes te encontre
          mais facilmente!
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

      {/* <FaceDiv>
        <FrenteDiv>
          <img src="/assets/img/Bot.svg" style={{ margin: "-90px 0 0 0" }} />
          <BoxTitle>Frente</BoxTitle>
          <BoxDescription>Automatize seus atendimentos!</BoxDescription>
          <BoxParagraph>
            Melhore a comunicação e experiência de seus clientes
          </BoxParagraph>
        </FrenteDiv>
        <FundoDiv>
          <img src="/assets/img/Bot.svg" style={{ margin: "-90px 0 0 0" }} />
          <BoxTitle>Fundo</BoxTitle>
          <BoxDescription>Automatize seus atendimentos!</BoxDescription>
          <BoxParagraph>
            Melhore a comunicação e experiência de seus clientes
          </BoxParagraph>
        </FundoDiv>
      </FaceDiv> */}
    </ServicosDiv>
  );
};

export default Servicos;
