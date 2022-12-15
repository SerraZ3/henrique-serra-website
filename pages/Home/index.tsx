import React from "react";
import Nav from "../../components/Nav";
import NavResp from "../../components/NavResp";
import Banner from "./Banner";
import Form from "./Form";
import Portfolio from "./Portfolio";
import Services from "./Services";

import { FullScreen, GreenCard, Title, WhiteCard } from "./styles";

const Home: React.FC = () => {
  return (
    <FullScreen>
      <Nav />
      <NavResp />

      <Banner id={"home"} />
      <GreenCard id={"services"}>
        <Title>Modernize seu negócio</Title>
      </GreenCard>
      <Services />

      <GreenCard id={"portfolio"}>
        <Title>Portfólio</Title>
      </GreenCard>
      <Portfolio />
      <WhiteCard id={"contact"}>
        <Title>Faça já seu orçamento gratuito!</Title>
      </WhiteCard>
      <Form />
    </FullScreen>
  );
};

export default Home;
