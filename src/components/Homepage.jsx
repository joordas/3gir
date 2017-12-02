import React, { Component } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { findDOMNode } from "react-dom";
import { debounce } from "lodash";

import LogoHeader from "./LogoHeader";
import HomepageBanner from "./HomepageBanner";
import ServicePanel from "./ServicePanel";

class Homepage extends Component {
  state = {
    navBarFixed: false,
    scrollTop: 0
  };

  handleScroll = element => {
    window.addEventListener("scroll", () => {
      const navBarFixed = findDOMNode(element).getBoundingClientRect().y;
      this.setState({ navBarFixed: navBarFixed < 0, scrollTop: navBarFixed }),
        300;
    });
  };

  animateRectangles = () => {
    const svg = document.querySelector(".rects");
    window.addEventListener("scroll", () => {
      svg.style.marginTop = `${this.state.scrollTop * 3}px`;
      document.body.style.backgroundColor = `rgb(${Math.floor(
        245 + this.state.scrollTop / 5
      )}, ${Math.floor(245 + this.state.scrollTop / 5)}, ${Math.floor(
        245 + this.state.scrollTop / 5
      )})`;
    });
  };

  render() {
    return (
      <div>
        <LogoHeader navBarFixed={this.state.navBarFixed} />
        <HomepageBanner
          fixNavBar={this.handleScroll}
          scrollTop={this.state.scrollTop}
        />
        <SVG
          src="/public/img/rectangles.svg"
          className="rects"
          onLoad={this.animateRectangles}
        />
        <ServicePanel
          borderColor="var(--blue)"
          scrollTop={this.state.scrollTop}
        />
      </div>
    );
  }
}

export default Homepage;
