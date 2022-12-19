import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ContactDiv,
  ContactsParagraph,
  Container,
  FormDiv,
  LimitContainer,
  SocialDiv,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container bgc="#1d1d1d" withoutHeight>
      <LimitContainer>
        <FormDiv>
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
              <Link
                href={"https://www.linkedin.com/in/serra-henrique/"}
                target={"_blank"}
              >
                <ContactsParagraph>
                  linkedin.com/in/serra-henrique/
                </ContactsParagraph>
              </Link>
            </SocialDiv>

            <SocialDiv>
              <Image
                src="/assets/img/WhatsappIcon.svg"
                width={30}
                height={30}
                alt="Whatsapp icon"
              />
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=5573991420671&text=Quero%20fazer%20um%20or%C3%A7amento!"
                }
                target={"_blank"}
              >
                <ContactsParagraph>(73) 99142-0671</ContactsParagraph>
              </Link>
            </SocialDiv>

            <SocialDiv>
              <Image
                src="/assets/img/GithubIcon.png"
                width={30}
                height={30}
                alt="Github icon"
              />
              <Link href={"https://github.com/SerraZ3"} target={"_blank"}>
                <ContactsParagraph>github.com/SerraZ3</ContactsParagraph>
              </Link>
            </SocialDiv>
          </ContactDiv>
          {/* <EmailDiv>
            <Input type={"text"} placeholder={"Nome"} />
            <Input type={"email"} placeholder={"E-mail"} />
            <Message placeholder={"Mensagem"} />
            <Submit type={"submit"}>Enviar</Submit>
          </EmailDiv> */}
        </FormDiv>
      </LimitContainer>
    </Container>
  );
};

export default Footer;
