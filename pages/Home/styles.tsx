import styled from "styled-components";

export const Mate = styled.div`
  padding: 300px 0;
`;

export const Div = styled.div`
  background-color: #1d1d1d;
  width: 100vw;
  height: 100vh;
`;

export const BannerDiv = styled.div`
  color: #fff;
  padding: 150px 0;
  display: flex;
  align-items: center;
  justify-content: start;
  /* max-width: 1000px; */
  @media (min-width: 500px) {
    justify-content: center;
  }
`;
export const PhraseDiv = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: start; */
  max-width: 70vw;
  width: 100%;
  margin-left: 0;
  margin: auto;
  @media (min-width: 500px) {
    margin-left: 68px;
  }
`;
export const Phrase = styled.h3`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  font-size: 36px;
  line-height: 51px;
  text-align: justify;
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
  max-width: 150px;
  color: #ffffff;
  margin-top: -140px;
  transform: rotate(270deg);
`;

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
`;

export const SquareContainer = styled.div`
  /* ajeitar */
  margin-top: -210px;
  margin-left: 30px;
  @media (min-width: 600px) {
    margin-left: 50%;
  }
`;
export const Square1 = styled.div`
  margin-top: -210px;
  border: 1px solid #11ff8d;
  height: 194px;
  width: 194px;
`;
export const Square2 = styled.div`
  margin-top: -210px;
  border: 1px solid #11ff8d;
  height: 194px;
  width: 194px;
`;
export const Square3 = styled.div`
  margin-top: -210px;
  border: 1px solid #11ff8d;
  height: 194px;
  width: 194px;
`;

export const GreenCard = styled.div`
  /* margin-top: -230px; */
  height: 185px;
  background: #11ff8d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 45px;
  line-height: 48px;
  color: #1d1d1d;
  text-align: center;
  margin: 0 auto;
  @media (min-width: 630px) {
    font-size: 60px;
    line-height: 79px;
  }
`;

export const WhiteCard = styled.div`
  /* margin-top: -230px; */
  height: 185px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServicosDiv = styled.div`
  padding: 150px 0;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 115px 20px;
  /* @media (min-width: 730px) {
    flex-wrap: nowrap;
  } */
`;

export const BoxDiv = styled.div`
  max-width: 80vw;
  width: 305px;
  height: auto;
  background: #2d2c2c;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 30px;
  text-align: center;
`;

export const BoxTitle = styled.h3`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 36px;
  color: #ffffff;
`;

export const BoxDescription = styled.p`
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

export const KMParagraph = styled.p`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 36px;
  color: #ffffff;
`;

export const AnalyticsDiv = styled.div`
  padding: 100px 0;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ADiv = styled.div`
  max-width: 948px;
  gap: 15px 0;
  /* isso não funcionou */
`;
export const AFlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 630px) {
    flex-wrap: nowrap;
  }
`;

export const AParagraph = styled.p`
  font-family: "Roboto", monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 52px;
  color: #ffffff;
  margin: auto;
  max-width: 80vw;
  text-align: center;
  @media (min-width: 630px) {
    text-align: left;
  }
`;

export const ASpan = styled.span`
  font-weight: 700;
`;

export const FormDiv = styled.div`
  padding: 100px 0;
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

export const WhatsDiv = styled.div`
  display: flex;
`;

export const ContactsParagraph = styled.p`
  padding: 0 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
`;

export const GitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
