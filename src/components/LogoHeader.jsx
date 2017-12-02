import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled(Link)`
  position: fixed;
  transition: all 0.3s ease-out;
  &.fixed {
    background-color: white;
    div {
      padding: 20px 0 20px 4.375rem;
    }
  }
`;

const Wrapper = styled.div`
  transition: all 0.3s ease-out;
  padding: 60px 0 60px 4.375rem;
  z-index: 2;
  width: 100vw;
  @media (max-width: 1400px) {
    padding-left: 30px;
  }
`;

const Gradient = styled.span`
  font-family: var(--font-montserrat);
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--blue);
  background: -webkit-linear-gradient(0deg, var(--pink), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 30px;
  @media (max-width: 1000px) {
    font-size: 1.125rem;
  }
`;

const LogoSVG = styled.img`
  height: 34px;
  @media (max-width: 700px) {
    padding-left: 0px;
  }
`;

const Align = styled.span`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    margin-left: 0;
    align-items: flex-start;
  }
`;

class LogoHeader extends Component {
  render() {
    return (
      <Logo to="/" className={this.props.navBarFixed ? "fixed" : ""}>
        <Wrapper>
          <Align>
            <LogoSVG src="/public/img/2.svg" alt="3GiR Logo" />
            <Gradient>— affordable web services.</Gradient>
          </Align>
        </Wrapper>
      </Logo>
    );
  }
}

export default LogoHeader;
