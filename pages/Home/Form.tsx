import React from "react";
import { ContactDiv, EmailDiv, FormDiv, Input, Message } from "./styles";

// import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <FormDiv>
      <ContactDiv>
        <p>08373743847049</p>
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
