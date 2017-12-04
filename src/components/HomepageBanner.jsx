import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
  background-color: var(--lightGrey);

  padding-left: 4.375rem;
  padding-top: 250px; // offseting LogoHeader's position:fixed;
  // height: 220vh; // test
  @media (max-width: 1400px) {
    padding-left: 30px;
  }
`;

const Header = styled.h1`
  color: var(--black);
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 400;
  line-height: 7.688rem;
  font-size: 9rem;
  letter-spacing: -0.07em;
  max-width: 392px;
  z-index: 100;
  // overflow-x: hidden;
  @media (max-width: 1400px) {
    font-size: 6rem;
    max-width: 200px;
    line-height: 5rem;
  }
`;

const Subheader = styled.h2`
  color: var(--black);
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 400;
  line-height: 38px;
  font-size: 3.188rem;
  margin-top: 50px;
  margin-bottom: 70px;
  @media (max-width: 1400px) {
    font-size: 2.3rem;
    margin-top: 20px;
  }
`;

const Contact = styled(Link)`
  color: white;
  border: 2px solid white;
  background-color: var(--blue);
  padding: 16px 34px;
  font-size: 2rem;
  font-family: var(--font-montserrat);
  border-radius: 999rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
  flex-grow: 0;
  margin-bottom: 100px;
  display: inline-block;
  max-width: 200px;
  text-align: center;
  transition: all 0.2s ease-in;
  cursor: pointer;
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
        scrollTop={this.props.scrollTop}
        style={{
          backgroundColor: `rgb(${Math.floor(
            245 + this.props.scrollTop / 5
          )}, ${Math.floor(245 + this.props.scrollTop / 5)}, ${Math.floor(
            245 + this.props.scrollTop / 5
          )})`
        }}
      >
        <Header
          scrollTop={this.props.scrollTop}
          style={{
            color: `rgb(${Math.floor(
              25 - this.props.scrollTop / 1.2
            )}, ${Math.floor(25 - this.props.scrollTop / 1.2)}, ${Math.floor(
              25 - this.props.scrollTop / 1.2
            )})`,
            lineHeight: `${7.688 + this.props.scrollTop * -1 / 120}rem`
          }}
        >
          We make websites.
        </Header>
        <Subheader
          scrollTop={this.props.scrollTop}
          style={{
            color: `rgb(${Math.floor(
              25 - this.props.scrollTop / 1.2
            )}, ${Math.floor(25 - this.props.scrollTop / 1.2)}, ${Math.floor(
              25 - this.props.scrollTop / 1.2
            )})`
          }}
        >
          And then more.
        </Subheader>
        <Contact to="/contact">let's talk!</Contact>
      </Background>
    );
  }
}

export default HomepageBanner;
