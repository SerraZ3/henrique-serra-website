import React from "react";
import {
  Img,
  Pi,
  PictureDiv,
  PictureParagraph,
  PictureTitle,
  PortifolioDiv,
} from "./styles";

interface Portifolio {
  id: string;
}

const Portifolio: React.FC<Portifolio> = ({ id }) => {
  return (
    <PortifolioDiv id={id}>
      <PictureDiv>
        <PictureTitle>NEX</PictureTitle>
        <Img src="/assets/img/NexImg.png" style={{ maxWidth: "80vw" }} />
        <Pi className="pimagemteste">teste</Pi>
        <PictureParagraph>Exchange descentralizada</PictureParagraph>
      </PictureDiv>

      <PictureDiv>
        <PictureTitle>Expo cryto summit</PictureTitle>
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
    </PortifolioDiv>
  );
};

export default Portifolio;
