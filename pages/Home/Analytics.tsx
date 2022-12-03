import React from "react";
import { AnalyticsDiv, ADiv, AParagraph, ASpan } from "./styles";

// import { Container } from './styles';

const Analytics: React.FC = () => {
  return (
    <AnalyticsDiv>
      <ADiv>
        {/* <img src="" alt="" /> */}
        <AParagraph>
          Seja encontrado no Google através de técnicas de <ASpan>SEO</ASpan>
        </AParagraph>
        <AParagraph>
          Tome as melhores decisões a partir do Google Analytics
        </AParagraph>
      </ADiv>
    </AnalyticsDiv>
  );
};

export default Analytics;
