import React, { Component } from "react";
import styled from "styled-components";

const Panel = styled.div`
  background-color: var(--darkBlue);
  display: flex;
  flex-direction: column;
  border: 3px solid var(--lightDarkBlue);
  border-radius: 3px;
`;

const Image = styled.img`
  background-color: var(--lightGrey);
  padding: 10px 0;
  border-radius: 3px;
  max-width: 100%;
  flex-grow: 0;
`;

const TextContent = styled.div`
  padding: 24px;
  h2,
  h3 {
    margin: 0;
    font-family: var(--font-raleway);
    color: var(--lightGrey);
    text-transform: capitalize;
  }

  h3 {
    font-weight: 700;
    font-size: 2.875rem;
  }

  h2 {
    font-weight: 300;
    font-size: 2.125rem;
    position: relative;
    display: inline-block;
    z-index: 3;
    &:after {
      content: "";
      width: 100%;
      height: 0.875rem;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${props => props.color};
      z-index: -1;
    }
  }

  p {
    color: white;
    font-family: lato;
    font-size: 1.25rem;
    line-height: 1.375;
  }
`;

class ServicePanel extends Component {
  render() {
    const { title, headline, description, img, color } = this.props.service;
    return (
      <Panel>
        <Image src={`/public/img/${img}`} />
        <TextContent color={color}>
          <h3> {headline}</h3>
          <h2> {title}</h2>
          <p>{description}</p>
        </TextContent>
      </Panel>
    );
  }
}

export default ServicePanel;
