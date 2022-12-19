import React from "react";

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
            {/* <ImageIcon src="/assets/img/Computer.svg" height="200px" width="200px" /> */}
            <ImageIcon src="/assets/img/Computer.svg" alt="Computer" />

            <BoxTitle>Website</BoxTitle>
            <BoxDescription>Mostre o seu negócio! </BoxDescription>
            {/* <BoxParagraph>
              Design claro, mecanismos de buscas otimizados e conversão de
              usuários para clientes
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src="/assets/img/Mobile.svg" alt="Cellphone" />
            <BoxTitle>Aplicativo</BoxTitle>
            <BoxDescription>Tudo na palma das mãos!</BoxDescription>
            {/* <BoxParagraph>
              Realize atividades rotineiras em seu celular de forma rápida e
              fácil com um app híbrido (Android e IOS)
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src="/assets/img/WordpressIcon.svg" alt="Wordpress" />
            <BoxTitle>Wordpress</BoxTitle>
            <BoxDescription>Sites fáceis de manutenção</BoxDescription>
            {/* <BoxParagraph>
              Toda as vantagens de um website com a capacidade de atualizações
              feita por você
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src="/assets/img/EcommerceIcon.svg" alt="Ecommerce" />
            <BoxTitle>Ecommerce</BoxTitle>
            <BoxDescription>Aumente sua venda no digital</BoxDescription>
            {/* <BoxParagraph>
              Mostre e venda seus produtos através de uma
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon
              src="/assets/img/BusinessIcon.svg"
              alt="Google meu negócio"
            />
            <BoxTitle>Meu negócio</BoxTitle>
            <BoxDescription>Sua empresa cadastrada no google</BoxDescription>
            {/* <BoxParagraph>
              Registre sua empresa no google e permita que seus clientes te
              encontre mais facilmente!
            </BoxParagraph> */}
          </BoxDiv>

          <BoxDiv>
            <ImageIcon src="/assets/img/Bot.svg" alt="Bot" />
            <BoxTitle>ChatBot</BoxTitle>
            <BoxDescription>Automatize seus atendimentos!</BoxDescription>
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
