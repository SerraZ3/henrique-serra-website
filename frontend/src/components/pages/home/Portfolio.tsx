import React from "react";
import {
  Container,
  Img,
  LimitContainer,
  PictureDiv,
  PictureParagraph,
  PictureTitle,
  PortfolioDiv,
} from "./styles";
import nexImg from "../../../assets/img/NexImg.png";
import expoImg from "../../../assets/img/ECSImg.png";
import cacauDigitalImg from "../../../assets/img/CacauImg.png";
import crazbyImg from "../../../assets/img/CrazbyImg.png";
import henriqueSerraImg from "../../../assets/img/HenriqueSerra.png";

const Portfolio: React.FC = () => {
  return (
    <Container bgc="#1d1d1d">
      <LimitContainer>
        <PortfolioDiv>
          <PictureDiv>
            <PictureTitle>NEX</PictureTitle>
            <a
              href="https://nex.on.fleek.co/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Img
                src={nexImg}
                style={{ maxWidth: "80vw" }}
                alt="Website nex"
              />
            </a>
            <PictureParagraph>Exchange descentralizada</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Expo crypto summit</PictureTitle>
            <a
              href="https://expo.on.fleek.co/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Img
                src={expoImg}
                style={{ maxWidth: "80vw" }}
                alt="Website Expo Crypto Summit"
              />
            </a>
            <PictureParagraph>Plataforma NFT</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Cacau Digital</PictureTitle>
            <a
              href="https://cacaudigital.io/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Img
                src={cacauDigitalImg}
                style={{ maxWidth: "80vw" }}
                alt="Website Cacau Digital"
              />
            </a>
            <PictureParagraph>Plataforma de moeda digital</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Comunidade Crazby</PictureTitle>
            <a
              href="https://telegram.me/Crazby_Bot"
              target={"_blank"}
              rel="noreferrer"
            >
              <Img
                src={crazbyImg}
                style={{ maxWidth: "80vw" }}
                alt="Chatbot Crazby"
              />
            </a>
            <PictureParagraph>Chatbot para comunidade</PictureParagraph>
          </PictureDiv>
          <PictureDiv>
            <PictureTitle>Henrique Serra</PictureTitle>
            <a
              href="https://henriqueserra.com.br"
              target={"_blank"}
              rel="noreferrer"
            >
              <Img
                src={henriqueSerraImg}
                style={{ maxWidth: "80vw" }}
                alt="Website Henrique Serra"
              />
            </a>
            <PictureParagraph>Site para portfólio</PictureParagraph>
          </PictureDiv>
        </PortfolioDiv>
      </LimitContainer>
    </Container>
  );
};

export default Portfolio;
