import React from "react";
import {
  ContactDiv,
  EmailDiv,
  FormDiv,
  Input,
  Message,
  WhatsDiv,
  ContactsParagraph,
  GitDiv,
} from "./styles";

// import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <FormDiv>
      <ContactDiv>
        <WhatsDiv>
          <img src="/assets/img/whatsapp.svg" />
          <ContactsParagraph>08373743847049</ContactsParagraph>
        </WhatsDiv>
        <GitDiv>
          <img
            src="/assets/img/Github.png"
            style={{ width: "30px", height: "30px" }}
          />
          <ContactsParagraph>08373743847049</ContactsParagraph>
        </GitDiv>
      </ContactDiv>
      <EmailDiv>
        <Input type={"text"} placeholder={"Nome"}></Input>
        <Input type={"email"} placeholder={"E-mail"}></Input>
        <Message placeholder={"Mensagem"}></Message>
      </EmailDiv>
    </FormDiv>
  );
};

export default Form;
