import Image from "next/image";
import React from "react";
import {
  ContactDiv,
  ContactsParagraph,
  Container,
  EmailDiv,
  FormDiv,
  Input,
  LimitContainer,
  Message,
  SocialDiv,
  Submit,
} from "./styles";

interface IForm {
  id: string;
}

const Form: React.FC<IForm> = ({ id }) => {
  return (
    <Container bgc="#1d1d1d">
      <LimitContainer>
        <FormDiv id={id}>
          <ContactDiv>
            {/* consertar resoponsivo desa parte  */}
            <SocialDiv>
              <Image
                src="/assets/img/EmailIcon.svg"
                width={30}
                height={30}
                alt="Email icon"
              />

              <ContactsParagraph>serra.henrique3@gmail.com</ContactsParagraph>
            </SocialDiv>

            <SocialDiv>
              <Image
                src="/assets/img/LinkedinIcon.svg"
                width={30}
                height={30}
                alt="Linkedin icon"
              />
              <ContactsParagraph>
                linkedin.com/in/serra-henrique/
              </ContactsParagraph>
            </SocialDiv>

            <SocialDiv>
              <Image
                src="/assets/img/WhatsappIcon.svg"
                width={30}
                height={30}
                alt="Whatsapp icon"
              />
              <ContactsParagraph>(73) 9982-0671</ContactsParagraph>
            </SocialDiv>

            <SocialDiv>
              <Image
                src="/assets/img/GithubIcon.png"
                width={30}
                height={30}
                alt="Github icon"
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
      </LimitContainer>
    </Container>
  );
};

export default Form;
