import React, { Component } from "react";
import { render } from "react-dom";

// components
import WhitePanel from "./components/WhitePanel";
import MenuBar from "./components/MenuBar";

class App extends Component {
  render() {
    return (
      <WhitePanel>
        <MenuBar />
      </WhitePanel>
    );
  }
}

render(<App />, document.getElementById("app"));
