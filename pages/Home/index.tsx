import React from "react";
import Nav from "../../components/Nav";
import NavResp from "../../components/NavResp";
import Banner from "./Banner";
import Form from "./Form";
import Portfolio from "./Portfolio";
import Services from "./Services";

import {
  FullScreen,
  GreenCard,
  LimitContainer,
  Title,
  WhiteCard,
} from "./styles";

const Home: React.FC = () => {
  return (
    <FullScreen>
      <Nav />
      <NavResp />

      <Banner id={"home"} />
      <GreenCard>
        <Title>Modernize seu negócio</Title>
      </GreenCard>
      <Services id={"services"} />
      <GreenCard>
        <Title>Portfólio</Title>
      </GreenCard>
      <Portfolio id={"portfolio"} />
      <WhiteCard>
        <Title>Faça já seu orçamento gratuito!</Title>
      </WhiteCard>
      <Form id={"contact"} />

      {/* <IndexDiv>
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
          <Title>Faça já seu orçamento!</Title>
        </WhiteCard>
        <Form id={"contact"} />
      </IndexDiv>
      >>>>>>> f257c53 (box servicos padronizados) */}
    </FullScreen>
  );
};

export default Home;
