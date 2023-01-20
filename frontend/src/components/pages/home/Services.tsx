import React from "react";

import computerImg from "../../../assets/img/Computer.svg";
import mobileImg from "../../../assets/img/Mobile.svg";
import wordpressImg from "../../../assets/img/WordpressIcon.svg";
import ecommerceImg from "../../../assets/img/EcommerceIcon.svg";
import businessImg from "../../../assets/img/BusinessIcon.svg";
import botImg from "../../../assets/img/Bot.svg";
//css
import {
  BoxDescription,
  BoxDiv,
  BoxTitle,
  Container,
  ImageIcon,
  LimitContainer,
  ServicesDiv,
} from "./styles";

const Services: React.FC = () => {
  return (
    <Container bgc="#1d1d1d">
      <LimitContainer>
        <ServicesDiv>
          <BoxDiv>
            <ImageIcon src={computerImg} alt="Computer" />

            <BoxTitle>Website</BoxTitle>
            {/* <BoxDescription>Mostre o seu negócio! </BoxDescription> */}
            {/* <BoxParagraph>
              Design claro, mecanismos de buscas otimizados e conversão de
              usuários para clientes
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src={mobileImg} alt="Cellphone" />
            <BoxTitle>Aplicativo</BoxTitle>
            <BoxDescription>Android e Ios</BoxDescription>
            {/* <BoxParagraph>
              Realize atividades rotineiras em seu celular de forma rápida e
              fácil com um app híbrido (Android e IOS)
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src={wordpressImg} alt="Wordpress" />
            <BoxTitle>Wordpress</BoxTitle>
            {/* <BoxDescription>Sites fáceis de manutenção</BoxDescription> */}
            {/* <BoxParagraph>
              Toda as vantagens de um website com a capacidade de atualizações
              feita por você
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src={ecommerceImg} alt="Ecommerce" />
            <BoxTitle>Ecommerce</BoxTitle>
            {/* <BoxDescription>Aumente sua venda no digital</BoxDescription> */}
            {/* <BoxParagraph>
              Mostre e venda seus produtos através de uma
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src={businessImg} alt="Google meu negócio" />
            <BoxTitle>Meu negócio</BoxTitle>
            {/* <BoxDescription>Sua empresa cadastrada no google</BoxDescription> */}
            {/* <BoxParagraph>
              Registre sua empresa no google e permita que seus clientes te
              encontre mais facilmente!
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src={botImg} alt="Bot" />
            <BoxTitle>ChatBot</BoxTitle>
            {/* <BoxDescription>Automatize seus atendimentos!</BoxDescription> */}
            {/* <BoxParagraph>
              Melhore a comunicação e experiência de seus clientes
            </BoxParagraph> */}
          </BoxDiv>
        </ServicesDiv>
      </LimitContainer>
    </Container>
  );
};

export default Services;
