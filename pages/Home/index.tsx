import React from "react";
import Nav from "../../components/Nav";
import NavResp from "../../components/NavResp";
import Banner from "./Banner";

import { Div } from './styles';

const Home: React.FC = () => {
  return (
    <Div>
      <Nav />
      <NavResp />
      <Banner />
    </Div>
  );
};

export default Home;
