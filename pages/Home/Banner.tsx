import React from "react";
import {
  BannerDiv,
  Phrase,
  Span,
  PhraseDiv,
  WayDiv,
  Div,
  Mate,
  Paragraph,
  SquareContainer,
  Square1,
  Square2,
  Square3,
} from "./styles";

// import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Div>
      <BannerDiv>
        <PhraseDiv>
          <Phrase>
            A <Span>melhor solução tecnológica</Span> para o seu negócio
          </Phrase>
        </PhraseDiv>
      </BannerDiv>
      <WayDiv>
        <Paragraph>Role para baixo</Paragraph>
      </WayDiv>
      <SquareContainer>
        <Square1 />
        <Square2 />
        <Square3 />
      </SquareContainer>
      {/* <Mate /> */}
    </Div>
  );
};
export default Banner;
