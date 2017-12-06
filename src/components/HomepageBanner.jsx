import React, { Component } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

const Background = styled.div`
  background-color: var(--lightDarkBlue);
  z-index: 2;
  padding-left: 4.375rem;
  height: 100vh;
  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;

const Header = styled.h1`
  color: var(--lightGrey);
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 400;
  line-height: 7.688rem;
  font-size: 9rem;
  letter-spacing: -0.07em;
  z-index: 100;
  position: relative;
  span {
    position: relative;
    display: table;
    &:after {
      background-color: #7a8d9b;
      content: "";
      width: 150%;
      height: 12px;
      position: absolute;
      bottom: 0;
      left: -100px;
      z-index: -1;
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
  @media (max-width: 800px) {
    font-size: 4rem;
    line-height: 3.5rem;
  }
`;

const Subheader = styled.h2`
  color: var(--yellow);
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 400;
  line-height: 38px;
  font-size: 3.188rem;
  margin-top: 50px;
  margin-bottom: 70px;
  position: relative;
  z-index: 10;
  @media (max-width: 1400px) {
    font-size: 2.3rem;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

const Content = styled.p`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 2.375rem;
  max-width: 50vw;
  position: relative;
  z-index: 10;
  color: var(--lightBlue);
  span {
    color: var(--yellow);
  }
  @media (max-width: 1400px) {
    font-size: 1.875rem;
  }
  @media (max-width: 800px) {
    font-size: 1.25rem;
    max-width: 100vw;
  }
`;

const Contact = styled(Link)`
  color: var(--lightDarkBlue);
  background-color: var(--yellow);
  padding: 16px 34px;
  font-size: 2rem;
  font-family: var(--font-montserrat);
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
  flex-grow: 0;
  margin-bottom: 100px;
  display: inline-block;
  max-width: 200px;
  text-align: center;
  transition: all 0.2s ease-in;
  cursor: pointer;
  position: relative;
  z-index: 10;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11),
      0 10px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1400px) {
    margin-bottom: 60px;
    font-size: 1.75rem;
    padding: 10px 25px;
  }
`;

const Lettering = styled.div`
  padding-top: 100px;
  z-index: 100;
  @media (max-width: 800px) {
    padding-top: 120px;
  }
`;

const PageDecor = styled.div`
  position: absolute;
  top: 74px;
  right: 0;
  height: calc(100vh - 74px);
  max-height: calc(100vh - 74px);
  z-index: 0;
  @media (max-width: 800px) {
    display: none;
  }
`;

class HomepageBanner extends Component {
  componentDidMount() {
    this.props.fixNavBar(this.banner);
  }

  render() {
    return (
      <Background
        ref={div => {
          this.banner = div;
        }}
      >
        <Lettering>
          <Header>
            <span>We</span>
            <span>make</span>
            <span>Websites</span>
          </Header>
          <Subheader scrollTop={this.props.scrollTop}>And then more.</Subheader>
          <Content>
            Romania based web studio that combines good design with clean code
            and excelent prices.
          </Content>
        </Lettering>
        <Contact to="/contact">let's talk!</Contact>
        <PageDecor>
          <SVG src="/public/img/thingie.svg" />
        </PageDecor>
      </Background>
    );
  }
}

export default HomepageBanner;
