import React from "react";
import {
  BannerDiv,
  Container,
  Div,
  Paragraph,
  Phrase,
  PhraseDiv,
  Span,
  Square1,
  Square2,
  Square3,
  SquareContainer,
  WayDiv,
  LimitContainer,
} from "./styles";

interface IBanner {
  id: string;
}

const Banner: React.FC<IBanner> = ({ id }) => {
  return (
    <Container bgc="#1d1d1d">
      <LimitContainer>
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
      </LimitContainer>
    </Container>
  );
};
export default Banner;
