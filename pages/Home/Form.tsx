import React from "react";
import {
  ContactDiv,
  EmailDiv,
  FormDiv,
  Input,
  Message,
  ContactsParagraph,
  SocialDiv,
  Submit,
} from "./styles";

// import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <FormDiv>
      <ContactDiv>
        {/* consertar resoponsivo desa parte  */}
        <SocialDiv>
          <img
            src="/assets/img/EmailIcon.svg"
            style={{ width: "30px", height: "30px" }}
          />
          <ContactsParagraph>serra.henrique3@gmail.com</ContactsParagraph>
        </SocialDiv>

        <SocialDiv>
          <img
            src="/assets/img/LinkedinIcon.svg"
            style={{ width: "30px", height: "30px" }}
          />
          <ContactsParagraph>linkedin.com/in/serra-henrique/</ContactsParagraph>
        </SocialDiv>

        <SocialDiv>
          <img
            src="/assets/img/WhatsappIcon.svg"
            style={{ width: "30px", height: "30px" }}
          />
          <ContactsParagraph>(73) 9982-0671</ContactsParagraph>
        </SocialDiv>

        <SocialDiv>
          <img
            src="/assets/img/GithubIcon.png"
            style={{ width: "30px", height: "30px" }}
          />
          <ContactsParagraph>github.com/SerraZ3</ContactsParagraph>
        </SocialDiv>
      </ContactDiv>
      <EmailDiv>
        <Input type={"text"} placeholder={"Nome"} />
        <Input type={"email"} placeholder={"E-mail"} />
        <Message placeholder={"Mensagem"} />
        <Submit type={"submit"}>Enviar</Submit>
      </EmailDiv>
    </FormDiv>
  );
};

export default Form;
