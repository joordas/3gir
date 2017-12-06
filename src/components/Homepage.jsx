import React, { Component } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { findDOMNode } from "react-dom";
import { debounce } from "lodash";

import LogoHeader from "./LogoHeader";
import HomepageBanner from "./HomepageBanner";
import ServicePanel from "./ServicePanel";
import ServicePanelsSlider from "./ServicePanelsSlider";
import LetsTalk from "./LetsTalk";
import Footer from "./Footer";

const PageDecor = styled.div`
  position: absolute;
  top: 74px;
  right: 0;
  height: calc(100vh - 74px);
  max-height: calc(100vh - 74px);
  z-index: 0;
  // @media (max-width: 800px) {
  //   display: none;
  // }
`;

class Homepage extends Component {
  state = {
    navBarFixed: false,
    scrollTop: 0
  };

  handleScroll = element => {
    window.addEventListener("scroll", () => {
      const navBarFixed = window.scrollY * -1;
      this.setState({ navBarFixed: navBarFixed < 0, scrollTop: navBarFixed }),
        300;
    });
  };

  render() {
    return (
      <div>
        <LogoHeader navBarFixed={this.state.navBarFixed} />
        <HomepageBanner fixNavBar={this.handleScroll} />
        <ServicePanelsSlider borderColor="var(--blue)" />
        <LetsTalk />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
