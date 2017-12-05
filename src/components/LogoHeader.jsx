import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled(Link)`
  position: fixed;
  transition: all 0.3s ease-out;
  &.fixed {
    z-index: 1000;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.17);
    div {
      padding: 20px 0 20px 4.375rem;
      @media (max-width: 800px) {
        padding: 20px;
      }
    }
  }
`;

const Wrapper = styled.div`
  transition: all 0.3s ease-out;
  padding: 60px 0 60px 4.375rem;
  z-index: 2;
  width: 100vw;
  @media (max-width: 1400px) {
    padding: 30px;
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
    font-size: 1rem;
  }
`;

const LogoSVG = styled.img`
  height: 34px;
  @media (max-width: 700px) {
    padding-left: 0px;
    height: 22px;
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
        <Wrapper
          style={{
            backgroundColor: `rgb(${Math.floor(
              245 + this.props.scrollTop / 5
            )}, ${Math.floor(245 + this.props.scrollTop / 5)}, ${Math.floor(
              245 + this.props.scrollTop / 5
            )})`
          }}
        >
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
