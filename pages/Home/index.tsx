import React from "react";
import Nav from "../../components/Nav";
import NavResp from "../../components/NavResp";
import Banner from "./Banner";
import Form from "./Form";
import Portifolio from "./Portifolio";
import Servicos from "./Servicos";

import {
  Div,
  FullScreen,
  GreenCard,
  IndexDiv,
  Mate,
  Title,
  WhiteCard,
} from "./styles";

const Home: React.FC = () => {
  return (
    <FullScreen>
      <IndexDiv>
        <Nav />
        <NavResp />
        <Banner id={"home"} />
        <GreenCard>
          <Title>Modernize seu negócio</Title>
        </GreenCard>
        <Servicos id={"services"} />
        <GreenCard>
          <Title>Portfólio</Title>
        </GreenCard>
        <Portifolio id={"portfolio"} />
        <WhiteCard>
          <Title>Faça já seu orçamento gratuito!</Title>
        </WhiteCard>
        <Form id={"contact"} />
      </IndexDiv>
    </FullScreen>
  );
};

export default Home;
