import React, { Component } from "react";
import { render } from "react-dom";

// components
import WhitePanel from "./components/WhitePanel";
import MenuBar from "./components/MenuBar";
import LogoHeader from "./components/LogoHeader";
import HomepageBanner from "./components/HomepageBanner";
import Services from "./components/Services";

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
        </WhitePanel>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
