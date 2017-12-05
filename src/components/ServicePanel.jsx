import React, { Component } from "react";
import styled from "styled-components";

const Panel = styled.div`
  position: relative;
  background-color: white;
  max-width: 1000px;
  width: 100%;
  min-height: 675px;
  z-index: 2;
  border-radius: 1px;
  @media (max-width: 800px) {
    // margin-bottom: 100px;
  }
`;
const Align = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 50px;
  z-index: 1;
  padding-top: 40px;
`;

const PanelContent = styled.div`
  background-color: white;
  // height: 100%;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  text-transform: capitalize;
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

const ServiceName = styled.h3`
  display: inline-block;
  font-family: var(--font-raleway);
  font-weight: 300;
  font-size: 3.475rem;
  margin: 0;
  text-transform: capitalize;
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
  @media (max-width: 800px) {
    font-size: 2.5rem;
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

const Header = styled.div`
  padding: 70px 50px 0;
  @media (max-width: 800px) {
    padding: 30px;
  }
`;

const Inner = styled.div`
  padding: 40px 80px 0 50px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Description = styled.p`
  padding-left: 50px;
  font-family: var(--font-montserrat);
  font-size: 1.5rem;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

class ServicePanel extends Component {
  render() {
    const { title, headline, description, img, color } = this.props.service;
    return (
      <Align>
        <Panel>
          <PanelContent>
            <Header>
              <Title>{headline}</Title>
              <ServiceName borderColor={color}>{title}</ServiceName>
            </Header>
            <Inner>
              <img src={`/public/img/${img}`} alt={`Illustration of ${name}`} />
              <Description>{description}</Description>
            </Inner>
          </PanelContent>
          <Border borderColor={color} />
        </Panel>
      </Align>
    );
  }
}

export default ServicePanel;
