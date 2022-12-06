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

interface Banner {
  id: string;
}

const Banner: React.FC<Banner> = ({ id }) => {
  return (
    <Div id={id}>
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
