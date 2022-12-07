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

interface IPortfolio {
  id: string;
}

const Portfolio: React.FC<IPortfolio> = ({ id }) => {
  return (
    <Container bgc="#1d1d1d">
      <LimitContainer>
        <PortfolioDiv id={id}>
          <PictureDiv>
            <PictureTitle>NEX</PictureTitle>
            <Img src="/assets/img/NexImg.png" style={{ maxWidth: "80vw" }} />
            <PictureParagraph>Exchange descentralizada</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Expo crypto summit</PictureTitle>
            <Img src="/assets/img/ECSImg.png" style={{ maxWidth: "80vw" }} />
            <PictureParagraph>Plataforma NFT</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Cacau Digital</PictureTitle>
            <Img src="/assets/img/CacauImg.png" style={{ maxWidth: "80vw" }} />
            <PictureParagraph>Plataforma de moeda digital</PictureParagraph>
          </PictureDiv>

          <PictureDiv>
            <PictureTitle>Comunidade Crazby</PictureTitle>
            <Img src="/assets/img/CrazbyImg.png" style={{ maxWidth: "80vw" }} />
            <PictureParagraph>Chatbot para comunidade</PictureParagraph>
          </PictureDiv>
        </PortfolioDiv>
      </LimitContainer>
    </Container>
  );
};

export default Portfolio;
