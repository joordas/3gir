import React, { Component } from "react";
import styled from "styled-components";

const Panel = styled.div`
  border-radius: 2px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  margin-top: 20px;
  margin-bottom: 10px;
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 1400px) {
    min-height: 0;
    margin-top: 0;
  }
`;

class WhitePanel extends Component {
  render() {
    return <Panel>{this.props.children}</Panel>;
  }
}

export default WhitePanel;
