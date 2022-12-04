import React from "react";

//css
import { AnalyticsDiv, ADiv, AParagraph, ASpan, AFlexDiv } from "./styles";

const Analytics: React.FC = () => {
  return (
    <AnalyticsDiv>
      <ADiv>
        <AFlexDiv>
          <img src="/assets/img/Magnifyingglass.svg" />
          <AParagraph>
            Seja encontrado no Google através de técnicas de <ASpan>SEO</ASpan>
          </AParagraph>
        </AFlexDiv>
        <AFlexDiv>
          <AParagraph>
            Tome as melhores decisões a partir do Google Analytics
          </AParagraph>
          <img src="/assets/img/Server.svg" />
        </AFlexDiv>
      </ADiv>
    </AnalyticsDiv>
  );
};

export default Analytics;
