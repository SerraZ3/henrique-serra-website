import React from "react";
import {
  PictureDiv,
  PictureParagraph,
  PictureTitle,
  PortifolioDiv,
} from "./styles";

// import { Container } from './styles';

const Portifolio: React.FC = () => {
  return (
    <PortifolioDiv>
      <PictureDiv>
        <PictureTitle>NEX</PictureTitle>
        <img src="/assets/img/NexImg.png" />
        <PictureParagraph>Exchange descentralizada</PictureParagraph>
      </PictureDiv>

      <PictureDiv>
        <PictureTitle>Expo cryto summit</PictureTitle>
        <img src="/assets/img/.png" />
        <PictureParagraph>Plataforma NFT</PictureParagraph>
      </PictureDiv>

      <PictureDiv>
        <PictureTitle>Cacau Digital</PictureTitle>
        <img src="/assets/img/.png" />
        <PictureParagraph>Plataforma de moeda digital</PictureParagraph>
      </PictureDiv>

      <PictureDiv>
        <PictureTitle>Comunidade Crazby</PictureTitle>
        <img src="/assets/img/.png" />
        <PictureParagraph>Chatbot para comunidade</PictureParagraph>
      </PictureDiv>
    </PortifolioDiv>
  );
};

export default Portifolio;
