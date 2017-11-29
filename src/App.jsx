import React, { Component } from "react";
import { render } from "react-dom";
import s from "styled-components";
// import Responsive from 'react-responsive';
// components
import WhitePanel from "./components/WhitePanel";
import MenuBar from "./components/MenuBar";
import LogoHeader from "./components/LogoHeader";
import HomepageBanner from "./components/HomepageBanner";
import Services from "./components/Services";
import Footer from "./components/Footer";
import LetsTalk from "./components/LetsTalk";




const SideDecoration = s.img`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 30px;
@media (max-width: 1400px) {
  height: 50%;
}
`;

class App extends Component {
  render() {
    return (
      <div>
        <WhitePanel>
          <MenuBar />
          <LogoHeader />
          <HomepageBanner />
        </WhitePanel>
        <WhitePanel>
          <Services />
          <SideDecoration src="/public/img/sidethings.svg" />
        </WhitePanel>
        <WhitePanel>
          <LetsTalk />
        </WhitePanel>
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
