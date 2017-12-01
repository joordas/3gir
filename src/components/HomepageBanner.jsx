import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: var(--lightGrey);
  padding-left: 4.375rem;
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

const Contact = styled.a`
  // this button needs to be bigger
  color: var(--blue);
  border: 1px solid var(--blue);
  background-color: white;
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
  cursor: pointer;
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

const HomepageBanner = () => (
  <Background>
    <Header>We make websites.</Header>
    <Subheader>And then more.</Subheader>
    <Contact onClick={() => scrollToElement("#contact", scrollOptions)}>
      let's talk!
    </Contact>
  </Background>
);

export default HomepageBanner;
