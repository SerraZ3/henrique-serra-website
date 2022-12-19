import Link from "next/link";
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

const Portfolio: React.FC = () => {
  return (
    <Container bgc="#1d1d1d">
      <LimitContainer>
        <PortfolioDiv>
          <PictureDiv>
            <PictureTitle>NEX</PictureTitle>
            <Link href="https://nex.on.fleek.co/" target={"_blank"}>
              <Img src="/assets/img/NexImg.png" style={{ maxWidth: "80vw" }} />
            </Link>
            <PictureParagraph>Exchange descentralizada</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Expo crypto summit</PictureTitle>
            <Link href="https://expo.on.fleek.co/" target={"_blank"}>
              <Img src="/assets/img/ECSImg.png" style={{ maxWidth: "80vw" }} />
            </Link>
            <PictureParagraph>Plataforma NFT</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Cacau Digital</PictureTitle>
            <Link href="https://cacaudigital.io/" target={"_blank"}>
              <Img
                src="/assets/img/CacauImg.png"
                style={{ maxWidth: "80vw" }}
              />
            </Link>
            <PictureParagraph>Plataforma de moeda digital</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Comunidade Crazby</PictureTitle>
            <Link href="https://telegram.me/Crazby_Bot" target={"_blank"}>
              <Img
                src="/assets/img/CrazbyImg.png"
                style={{ maxWidth: "80vw" }}
              />
            </Link>
            <PictureParagraph>Chatbot para comunidade</PictureParagraph>
          </PictureDiv>
          <PictureDiv>
            <PictureTitle>Henrique Serra</PictureTitle>
            <Link href="https://henriqueserra.com.br" target={"_blank"}>
              <Img
                src="/assets/img/HenriqueSerra.png"
                style={{ maxWidth: "80vw" }}
              />
            </Link>
            <PictureParagraph>Site para portfólio</PictureParagraph>
          </PictureDiv>
        </PortfolioDiv>
      </LimitContainer>
    </Container>
  );
};

export default Portfolio;
