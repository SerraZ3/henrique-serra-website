import React from "react";

import {
  ContactDiv,
  ContactsParagraph,
  Container,
  FormDiv,
  LimitContainer,
  SocialDiv,
} from "./styles";
import emailIcon from "../../../assets/img/EmailIcon.svg";
import linkedinIcon from "../../../assets/img/LinkedinIcon.svg";
import whatsappIcon from "../../../assets/img/WhatsappIcon.svg";
import githubIcon from "../../../assets/img/GithubIcon.png";
import googleAnalytics from "../../../lib/googleAnalytics";

const Footer: React.FC = () => {
  const gaEventTracker = googleAnalytics.useAnalyticsEventTracker("Home");

  return (
    <Container bgc="#1d1d1d" withoutHeight>
      <LimitContainer>
        <FormDiv>
          <ContactDiv>
            <SocialDiv>
              <img src={emailIcon} width={30} height={30} alt="Email icon" />
              <a
                href={"mailto:serra.henrique3@gmail.com"}
                onClick={() => {
                  gaEventTracker("Social", "email");
                }}
              >
                <ContactsParagraph>serra.henrique3@gmail.com</ContactsParagraph>
              </a>
            </SocialDiv>

            <SocialDiv>
              <img
                src={linkedinIcon}
                width={30}
                height={30}
                alt="Linkedin icon"
              />
              <a
                href={"https://www.linkedin.com/in/serra-henrique/"}
                target={"_blank"}
                onClick={() => {
                  gaEventTracker("Social", "linkedin");
                }}
                rel="noreferrer"
              >
                <ContactsParagraph>
                  linkedin.com/in/serra-henrique/
                </ContactsParagraph>
              </a>
            </SocialDiv>

            <SocialDiv>
              <img
                src={whatsappIcon}
                width={30}
                height={30}
                alt="Whatsapp icon"
              />
              <a
                href={
                  "https://api.whatsapp.com/send?phone=5573991420671&text=Quero%20fazer%20um%20or%C3%A7amento!"
                }
                onClick={() => {
                  gaEventTracker("Social", "whatsapp");
                }}
                target={"_blank"}
                rel="noreferrer"
              >
                <ContactsParagraph>(73) 99142-0671</ContactsParagraph>
              </a>
            </SocialDiv>

            <SocialDiv>
              <img src={githubIcon} width={30} height={30} alt="Github icon" />
              <a
                href={"https://github.com/SerraZ3"}
                target={"_blank"}
                rel="noreferrer"
                onClick={() => {
                  gaEventTracker("Social", "github");
                }}
              >
                <ContactsParagraph>github.com/SerraZ3</ContactsParagraph>
              </a>
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
