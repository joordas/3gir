import React, { Component } from "react";
import styled from "styled-components";

const Panel = styled.div`
  border-radius: 2px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  // max-height: 100vh;
`;

class WhitePanel extends Component {
  render() {
    return <Panel>{this.props.children}</Panel>;
  }
}

export default WhitePanel;
