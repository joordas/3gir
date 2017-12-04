import React from "react";
import styled from "styled-components";

import ContactForm from "./ContactForm";

const Container = styled.div`
  display: flex;
  max-width: 100vw;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  min-height: 400px;
  margin-bottom: 40px;
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
    z-index: -2;
    @media (max-width: 800px) {
      display: none;
    }
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
  margin-left: 4.375rem;
  &:after {
    background-color: var(--lightGrey);
    content: "";
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: -1;
  }
  @media (max-width: 700px) {
    text-align: center;
    font-size: 4rem;
    margin-left: 0;
  }
`;

const SideRectangles = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  max-height: 100%;
  @media (max-width: 700px) {
    display: none;
  }
`;

const LetsTalk = () => (
  <Container id="contact">
    <Title>contact</Title>
    <ContactForm />
    <SideRectangles src="/public/img/side_rectangles.svg" />
  </Container>
);

export default LetsTalk;
