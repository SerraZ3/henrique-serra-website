import React from "react";
import Nav from "../../components/Nav";
import NavResp from "../../components/NavResp";
import Analytics from "./Analytics";
import Banner from "./Banner";
import Form from "./Form";
import Servicos from "./Servicos";

import { Div, GreenCard, Mate, Title, WhiteCard } from "./styles";

const Home: React.FC = () => {
  return (
    <Div>
      <Nav />
      <NavResp />
      <Banner />
      <GreenCard>
        <Title>Modernize seu negócio</Title>
      </GreenCard>
      <Servicos />
      <GreenCard>
        <Title>Aumente seu alcance</Title>
      </GreenCard>
      <Analytics />
      <WhiteCard>
        <Title>Faça já seu orçamento gratuito!</Title>
      </WhiteCard>
      <Form />
    </Div>
  );
};

export default Home;
