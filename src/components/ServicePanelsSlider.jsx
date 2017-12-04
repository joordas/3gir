import React, { Component } from "react";
import styled from "styled-components";

import ServicePanel from "./ServicePanel";

const ProgressBar = styled.span`
  width: ${props => props.progress}vw;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 10px;
  color: var(--blue);
  z-index: 100;
`;

const Wrapper = styled.div`
  // position: sticky;
  // top: 0px;
  // left: 0px;
  // width: 100vw;
`;
const WhatWeDo = styled.h2`
  font-family: var(--font-montserrat);
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
  align-self: flex-start;
  margin-left: 4.375rem;
  margin-top: 1rem;
`;

const pages = [
  <ServicePanel title="Webdesign" borderColor="var(--blue)" />,
  <ServicePanel title="E-Commerce" borderColor="var(--pink)" />,
  <ServicePanel title="Branding" borderColor="green" />
];

class ServicePanelsSlider extends Component {
  state = {
    fixed: false,
    fixAt: null
  };
  handleScroll = () => {
    const scrollY = this.props.scrollTop;
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    // console.log(window);
    // console.log(window.pageYOffset);
    // console.log(scrollY);
    console.log(scrollY, this.sliderTop.offsetTop - scrollY);
    // console.log(scrollY, this.sliderTop);
    // console.log(scrollY > this.sliderTop.offsetTop);
    // console.log(this.sliderTop.getBoundingClientRect().top);
    // console.log(this.sliderTop.getBoundingClientRect());

    if (this.sliderTop.offsetTop - scrollY < 0) {
      // this.setState({ fixed: true });
    }
  };

  componentDidMount() {
    // window.addEventListener("scroll", this.handleScroll);
    // this.setState({ fixAt: this.sliderTop.offsetTop });
  }
  componentWillUnmount() {
    // window.removeEventListener("scroll", this.handleScoll);
  }

  render() {
    return (
      <Wrapper
        className={this.state.fixed ? "fixed" : ""}
        ref={div => (this.sliderTop = div)}
      >
        <WhatWeDo>what we do</WhatWeDo>
        <ServicePanel title="Webdesign" borderColor="var(--blue)" />
        <ServicePanel title="E-Commerce" borderColor="var(--pink)" />
        <ServicePanel title="E-Commerce" borderColor="var(--yellow)" />
      </Wrapper>
    );
  }
}

export default ServicePanelsSlider;
