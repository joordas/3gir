import React from "react";
import styled from "styled-components";

const Gradient = styled.div`
  background: linear-gradient(121.27deg, #3080ed -11.21%, #ff2f64 125.18%);
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding-left: 200px;
  position: relative;
  flex-grow: 1;
  @media (max-width: 1400px) {
    padding-left: 70px;
  }
`;

const Header = styled.h1`
  color: white;
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 400;
  line-height: 90px;
  font-size: 7rem;
  letter-spacing: -0.07em;
  max-width: 392px;
  padding-top: 86px;
  @media (max-width: 1400px) {
    font-size: 5rem;
    max-width: 200px;
  }
`;

const Subheader = styled.h2`
  color: white;
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 3.188rem;
  margin-top: 50px;
  margin-bottom: 70px;
  @media (max-width: 1400px) {
    font-size: 2.3rem;
    margin-top: 20px;
  }
`;

const Contact = styled.a`
  // this button needs to be bigger
  color: white;
  background-color: var(--pink);
  padding: 16px 34px;
  font-size: 2rem;
  font-family: var(--font-montserrat);
  border-radius: 999rem;
  box-shadow: 0px 0px 10px rgba(255, 46, 99, 0.5);
  flex-grow: 0;
  margin-bottom: 100px;
  display: inline-block;
  max-width: 200px;
  text-align: center;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 10px rgba(255, 46, 99, 0.5),
      0 10px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1400px) {
    margin-bottom: 60px;
    font-size: 1.75rem;
    padding: 10px 25px;
  }
`;

const LilGuy = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const HomepageBanner = () => (
  <Gradient>
    <div>
      <Header>We make websites.</Header>
      <Subheader>And then more.</Subheader>
      <Contact href="#">let's talk!</Contact>
    </div>
    <LilGuy id="lilguy" src="/public/img/lil guy.svg" />
  </Gradient>
);

export default HomepageBanner;
