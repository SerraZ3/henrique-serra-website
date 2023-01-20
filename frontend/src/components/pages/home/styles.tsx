import styled, { css, keyframes } from "styled-components";
interface IContainer {
  bgc?: string;
  withoutHeight?: boolean;
}
export const Container = styled.div<IContainer>(
  (props) => css`
    ${!props.withoutHeight &&
    css`
      min-height: 100vh;
    `}

    width: 100%;
    ${props.bgc &&
    css`
      background-color: ${props.bgc};
    `}
  `
);
export const Mate = styled.div`
  padding: 300px 0;
`;

export const A = styled.a``;

export const FullScreen = styled.div`
  min-height: 100vh;
`;

export const LimitContainer = styled.div`
  background-color: #1d1d1d;
  max-width: 1280px;
  margin: auto;
`;

export const ContainerBanner = styled.div`
  position: relative;
  height: 100vh;
`;

export const BannerDiv = styled.div`
  color: #fff;
  margin-top: 100px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: start;
  /* max-width: 1000px; */
  @media (min-width: 500px) {
    justify-content: center;
  }
`;
export const PhraseDiv = styled.div`
  width: 100%;
  margin-left: 0;
  margin: auto;
`;
export const Phrase = styled.h3`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  font-size: 36px;
  line-height: 51px;

  @media (min-width: 600px) {
    font-size: 100px;
    line-height: 79px;
    text-align: left;
  }
  @media (min-width: 500px) {
    font-size: 50px;
    line-height: 79px;
    text-align: left;
  }
`;

export const Span = styled.span`
  color: #11ff8d;
`;

export const WayDiv = styled.div`
  color: #ffffff;
  transform: rotate(270deg);
  display: none;
  position: absolute;
  bottom: 300px;
  @media (min-width: 400px) {
    display: block;
  }
`;

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  margin: 0;
`;
const ArrowMove = keyframes`  
  0%{
    left: -40px;  
  }
  50%{
    left: -50px;  
  }
  100% {
    left: -40px;  
  }
`;
export const ArrowDownIcon = styled.img.attrs({
  width: 25,
  height: 25,
})`
  transform: rotate(90deg);
  position: absolute;
  top: 0;
  left: -20px;
  animation-name: ${ArrowMove};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
export const SquareContainerToRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const SquareContainer = styled.div`
  /* display: none; */
  position: relative;

  width: 300px;
  @media (min-width: 730px) {
    /* display: block; */
  }
`;
export const Square1 = styled.div`
  border: 1px solid #11ff8d;
  height: 160px;
  width: 160px;
  position: absolute;
  top: 80px;
  left: 100px;
  @media (min-width: 800px) {
    height: 194px;
    width: 194px;
  }
`;
export const Square2 = styled.div`
  border: 1px solid #11ff8d;
  height: 160px;
  width: 160px;
  position: absolute;
  top: 0;
  left: 70px;
  @media (min-width: 800px) {
    height: 194px;
    width: 194px;
  }
`;
export const Square3 = styled.div`
  top: 0;
  border: 1px solid #11ff8d;
  height: 160px;
  width: 160px;
  position: absolute;
  top: 40px;
  left: 30px;
  @media (min-width: 800px) {
    height: 194px;
    width: 194px;
  }
`;

export const GreenCard = styled.div`
  /* margin-top: -230px; */
  height: 165px;
  background: #11ff8d;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    height: 100px;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 48px;
  color: #1d1d1d;
  text-align: center;
  margin: 0 auto;
  @media (min-width: 630px) {
    font-size: 45px;
    line-height: 79px;
  }
`;

export const WhiteCard = styled.div`
  /* margin-top: -230px; */
  height: 200px;

  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    height: 185px;
  }
  @media (min-width: 730px) {
  }
`;

export const ServicesDiv = styled.div`
  margin-top: 50px;
  padding: 150px 0;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 127px 25px;
  /* gap: 115px 20px; */
  /* @media (min-width: 730px) {
    flex-wrap: nowrap;
  } */
`;
export const ImageIcon = styled.img.attrs({
  width: 120,
  height: 120,
})`
  position: absolute;
  top: -70px;
`;
export const BoxDiv = styled.div`
  max-width: 80vw;
  width: 305px;
  /* height: auto; */
  /* height: 250px; */
  height: 180px;
  background: #2d2c2c;
  position: relative;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 15px 25px 15px;
  text-align: center;
`;

export const BoxTitle = styled.h3`
  margin-top: 10px;
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 36px;
  color: #ffffff;
`;

export const BoxDescription = styled.p`
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
`;

export const BoxParagraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

// export const FaceDiv = styled.div``;

// export const FrenteDiv = styled.div`
//   max-width: 80vw;
//   width: 305px;
//   height: auto;
//   background: #2d2c2c;
//   border-radius: 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 25px 30px;
//   text-align: center;

//   position: absolute;
//   width: 100%;
//   height: 100%;
//   padding: 10px;
//   border-radius: 10px;
//   transition: 700ms;

//   background: limegreen;
//   z-index: 1;

//   &:hover {
//     ${FaceDiv} {
//       transform: rotateY(180deg);
//       z-index: 0;
//     }
//   }
// `;

// export const FundoDiv = styled.div`
//   max-width: 80vw;
//   width: 305px;
//   height: auto;
//   background: #2d2c2c;
//   border-radius: 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 25px 30px;
//   text-align: center;

//   position: absolute;
//   width: 100%;
//   height: 100%;
//   padding: 10px;
//   border-radius: 10px;
//   transition: 700ms;

//   background: lightslategray;
//   transform: rotateY(-180deg);
//   backface-visibility: hidden;

//   &:hover {
//     ${FaceDiv} {
//       transform: rotateY(0);
//       z-index: 1;
//     }
//   }
// `;

export const KMParagraph = styled.p`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 36px;
  color: #ffffff;
`;

export const PortfolioDiv = styled.div`
  padding: 150px 0;
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 115px 20px;
  @media (min-width: 1100px) {
    justify-content: flex-start;
    gap: 115px 0;
  }
`;

export const Pi = styled.p`
  color: #fff;
`;

export const PictureDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    ${Pi} {
      color: red;
    }
  }
  @media only screen and (min-width: 1100px) {
    width: calc(1 / 3 * 100%);
  }
`;

export const PictureTitle = styled.h1`
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
`;

export const Img = styled.img``;

export const PictureParagraph = styled.p`
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
`;

export const FormDiv = styled.div`
  padding: 100px 0;
  min-height: 70vh;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 100px 0;
`;

export const ContactDiv = styled.div`
  color: #fff;
  max-width: 80vw;
  align-self: flex-start;
`;

export const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px 0;
  /* border-left: 1px solid #11ff8d; */
  /* max-width: 80vw; */
`;

export const Input = styled.input`
  max-width: 90vw;
  width: 516px;
  height: 68px;
  background: rgba(231, 231, 231, 0.06);
  border: 1px solid #11ff8d;
  border-radius: 5px;
  padding: 20px;
  outline: none;
  color: #ffff;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const Submit = styled.button`
  width: 150px;
  height: 38px;
  background: #11ff8d;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #1d1d1d;
  outline: none;
  border: none;
  /* align-self: flex-end; */
`;

export const Message = styled.textarea`
  max-width: 90vw;
  width: 516px;
  height: 206px;
  background: rgba(231, 231, 231, 0.06);
  border: 1px solid #11ff8d;
  border-radius: 5px;
  outline: none;
  padding: 20px;
  color: #ffff;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const SocialDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const ContactsParagraph = styled.p`
  text-align: center;
  padding: 0 20px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;
  @media (min-width: 630px) {
    font-size: 22px;
  }
  &:hover {
    color: #11ff8d;
    cursor: pointer;
  }
`;
export const FooterContainer = styled.div`
  background-color: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  @media only screen and (min-width: 992px) {
    height: 50px;
  }
`;
export const FooterText = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 18px;
  color: #1d1d1d;
  font-weight: 600;
`;
