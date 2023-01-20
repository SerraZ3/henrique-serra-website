import React from "react";
import arrowIcon from "../../../assets/img/Arrow.svg";
import {
  BannerDiv,
  Container,
  ContainerBanner,
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
  ArrowDownIcon,
  SquareContainerToRight,
} from "./styles";

interface IBanner {
  id: string;
}

const Banner: React.FC<IBanner> = ({ id }) => {
  return (
    <Container bgc="#1d1d1d">
      <LimitContainer>
        <ContainerBanner id={id}>
          <BannerDiv>
            <PhraseDiv>
              <Phrase>
                A <Span>melhor solução tecnológica</Span>
                <br /> para o seu negócio
              </Phrase>
            </PhraseDiv>
          </BannerDiv>
          <WayDiv>
            <Paragraph>Role para baixo</Paragraph>
            <ArrowDownIcon src={arrowIcon} alt="Arrow down" />
          </WayDiv>
          <SquareContainerToRight>
            <SquareContainer>
              <Square1 />
              <Square2 />
              <Square3 />
            </SquareContainer>
          </SquareContainerToRight>
          {/* <Mate /> */}
        </ContainerBanner>
      </LimitContainer>
    </Container>
  );
};
export default Banner;
