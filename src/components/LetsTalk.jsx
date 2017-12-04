import React from "react";
import styled from "styled-components";

import ContactForm from "./ContactForm";

const Container = styled.div`
  // display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  min-height: 400px;
  padding-left: 4.375rem;
  @media (max-width: 700px) {
    padding-left: 0;
    align-items: center;
  }
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    background-color: var(--lightGrey);
    border-radius: 2px;
    z-index: -1;
  }
`;

const Title = styled.span`
  font-family: var(--font-montserrat);
  font-weight: 700;
  font-size: 6rem;
  flex-grow: 0;
  color: #d8d8d8;
  display: inline-block;
  padding-top: 40px;
  margin-bottom: 50px;
  position: relative;
  &:after {
    background-color: var(--lightGrey);
    content: "";
    width: 100%;
    height: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  @media (max-width: 700px) {
    text-align: center;
    font-size: 4rem;
  }
`;

const LetsTalk = () => (
  <Container id="contact">
    <Title>contact</Title>
    <ContactForm />
  </Container>
);

export default LetsTalk;
