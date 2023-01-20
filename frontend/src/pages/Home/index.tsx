import React, { useEffect } from "react";
import Nav from "../../components/Nav";
import NavResp from "../../components/NavResp";
import Banner from "../../components/pages/home/Banner";
import Footer from "../../components/pages/home/Footer";
import FooterBar from "../../components/pages/home/FooterBar";
import Portfolio from "../../components/pages/home/Portfolio";
import Services from "../../components/pages/home/Services";
import ReactGA from "react-ga";

import {
  FullScreen,
  GreenCard,
  Title,
  WhiteCard,
} from "../../components/pages/home/styles";
const useAnalyticsEventTracker = (category = "Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

const Home: React.FC = () => {
  const gaEventTracker = useAnalyticsEventTracker("Home Page");
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    gaEventTracker("View", "Entrou na página");
  }, []);

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
      <Footer />
      <FooterBar />
    </FullScreen>
  );
};

export default Home;
