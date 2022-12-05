import React from "react";
import Nav from "../../components/Nav";
import NavResp from "../../components/NavResp";
import Banner from "./Banner";
import Form from "./Form";
import Portifolio from "./Portifolio";
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
        <Title>Portfólio</Title>
      </GreenCard>
      <Portifolio />
      <WhiteCard>
        <Title>Faça já seu orçamento gratuito!</Title>
      </WhiteCard>
      <Form />
    </Div>
  );
};

export default Home;
