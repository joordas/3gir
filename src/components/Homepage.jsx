import React, { Component } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

import LogoHeader from "./LogoHeader";
import HomepageBanner from "./HomepageBanner";

class Homepage extends Component {
  animateSvg() {
    // const rects = document.querySelectorAll(".rect");
    // const addAnimationListener = element => {
    //   element.addEventListener("mouseover", () => {
    //     const translateX = element.attributes.transform.value
    //       .split(" ")[0]
    //       .split("(")[1];
    //     console.log(element.attributes.transform.value);
    //     // element.attributes.transform.value = `translate(${translateX} 100)`;
    //     element.style.transform = `translate(${translateX}px, 100px)`;
    //     // element.style.transform += "scaleY(0)";
    //     console.log(element);
    //   });
    // };
    // rects.forEach(rect => addAnimationListener(rect));
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <LogoHeader />
        <HomepageBanner />
        <SVG
          src="/public/img/rectangles.svg"
          onLoad={() => this.animateSvg()}
          className="rects"
        />
      </div>
    );
  }
}

export default Homepage;
