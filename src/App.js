import React from "react";
import "./App.css";
import portfolioData from "./data.js";
import {
  Header,
  Banner,
  Profile,
  Visual,
  ListNormal,
  ListHorizontal,
  ListCard,
  ListLego,
  Intro,
  PortfolioContent,
  PortfolioGroup,
} from "react-portfolio-component-library";
function App() {
  return (
    <PortfolioGroup>
      <Header title={portfolioData.header.title} />
      <PortfolioContent>
        <Visual title={portfolioData.visual.title} />
        <Intro
          title={portfolioData.intro.title}
          items={portfolioData.intro.items}
        />
        <ListNormal
          title={portfolioData.listNormal.title}
          items={portfolioData.listNormal.items}
        />
        <ListHorizontal
          title={portfolioData.listHorizontal.title}
          items={portfolioData.listHorizontal.items}
        />
        <Banner />
        <ListCard
          title={portfolioData.listCard.title}
          items={portfolioData.listCard.items}
        />
        <ListLego
          title={portfolioData.listLego.title}
          items={portfolioData.listLego.items}
        />
        <Profile data={portfolioData.profile.data} />
      </PortfolioContent>
    </PortfolioGroup>
  );
}

export default App;
