import React, { Component } from "react";
import styled from "styled-components";

const Panel = styled.div`
  position: relative;
  background-color: white;
  max-width: 1000px;
  min-height: 675px;
  width: 1000px;
  z-index: 2;
  border-radius: 1px;
  margin-top: -80px;
`;
const Align = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  z-index: 1;
  padding-top: 40px;
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

const PanelContent = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  z-index: 3;
  position: absolute;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.13);
  border-radius: 1px;
`;

const Title = styled.h2`
  font-family: var(--font-raleway);
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
`;

const ServiceName = styled.h3`
  display: inline-block;
  font-weight: 500;
  font-family: var(--font-raleway);
  font-weight: 300;
  font-size: 3.125rem;
  margin: 0;
  position: relative;
  &:after {
    background-color: ${props => props.borderColor};
    content: "";
    width: 100%;
    height: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const Border = styled.div`
  border-radius: 1px;
  background-color: ${props => props.borderColor};
  position: absolute;
  top: 30px;
  left: -30px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Inner = styled.div`
  padding: 70px 50px 0;
`;

class ServicePanel extends Component {
  render() {
    return (
      <Align>
        <WhatWeDo>what we do</WhatWeDo>
        <Panel>
          <PanelContent>
            <Inner>
              <Title>Pixel Perfect</Title>
              <ServiceName>{this.props.title}</ServiceName>
            </Inner>
          </PanelContent>
          <Border borderColor={this.props.borderColor} />
        </Panel>
      </Align>
    );
  }
}

export default ServicePanel;
