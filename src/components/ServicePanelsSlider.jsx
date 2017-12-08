import React, { Component } from "react";
import styled from "styled-components";

import services from "../services";

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
  margin-bottom: 100px;
  background-color: var(--lightDarkBlue);
  flex-wrap: wrap;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0;
  }
`;
const WhatWeDo = styled.h2`
  font-family: var(--font-montserrat);
  font-size: 4.5rem;
  font-weight: 400;
  margin: 0;
  color: var(--yellow);
  align-self: flex-start;
  margin-left: 4.375rem;
  margin-top: 1rem;
  padding-top: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    margin-left: 20px;
    font-size: 3rem;
  }
`;

class ServicePanelsSlider extends Component {
  render() {
    return (
      <div id="services">
        <WhatWeDo scrollTop={this.props.scrollTop}>what we do</WhatWeDo>
        <Wrapper>
          {services.map(service => (
            <ServicePanel key={service.name} service={service} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default ServicePanelsSlider;
