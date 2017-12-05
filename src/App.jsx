import React, { Component } from "react";
import { render } from "react-dom";
import s from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
// components
import LetsTalk from "./components/LetsTalk";
import Homepage from "./components/Homepage";
import ServicePanelsSlider from "./components/ServicePanelsSlider";

const SideDecoration = s.img`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 30px;
@media (max-width: 1400px) {
  height: 50%;
}
@media (max-width: 700px) {
  display: none;
}
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={LetsTalk} />
          <Route exact path="/slider" component={ServicePanelsSlider} />
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("app"));
