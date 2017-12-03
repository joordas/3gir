import React, { Component } from "react";
import OverScroll from "react-over-scroll";
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

class ServicePanelsSlider extends Component {
  render() {
    const pages = [
      <ServicePanel
        title="Webdesign"
        scrollTop={this.props.scrollTop}
        borderColor="var(--blue)"
      />,
      <ServicePanel
        title="E-Commerce"
        scrollTop={this.props.scrollTop}
        borderColor="var(--pink)"
      />
    ];
    return (
      <OverScroll slides={pages.length} children={pages}>
        {(page, progress) => (
          <div>
            {pages[page]}
            <p style={{ color: "white" }}>{progress}</p>
            <ProgressBar progress={progress} />
            <span
              style={{
                width: `${progress}%`,
                height: 10,
                background: "var(--blue)"
              }}
            />
          </div>
        )}
      </OverScroll>
    );
  }
}

// Usage
// {slider}

export default ServicePanelsSlider;
