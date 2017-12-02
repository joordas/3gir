import React, { Component } from "react";
import styled from "styled-components";

const Border = styled.div`
  background-color: var(--blue);
`;
const Panel = styled.div`
  background-color: white;
`;

const Title = styled.h2`
  font-weight: 500;
`;
const ServiceName = styled.h3`
  font-weight: 500;
`;

class ServicePanel extends Component {
  render() {
    return (
      <Border>
        <Panel>
          <Title>Pixel Perfect</Title>
          <ServiceName>Webdesign</ServiceName>
        </Panel>
      </Border>
    );
  }
}

export default ServicePanel;
