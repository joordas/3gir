import React from "react";
import styled from "styled-components";

import ContactForm from "./ContactForm";

const Container = styled.div`
  position: relative;
  margin-bottom: 40px;
  @media (max-width: 700px) {
    padding-left: 0;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-family: var(--font-montserrat);
  font-size: 4.5rem;
  font-weight: 400;
  margin: 0;
  color: var(--yellow);
  align-self: flex-start;
  margin: 1rem 0 2rem 4.375rem;
  @media (max-width: 800px) {
    margin-left: 20px;
    font-size: 3rem;
  }
`;

const Illustration = styled.img`
  position: absolute;
  top: 100px;
  z-index: -1;
  left: 20px;
  height: 100%;
  overflow-x: hidden;
`;

const LetsTalk = () => (
  <Container id="contact">
    <Title>contact</Title>
    <Illustration src="/public/img/contact.svg" />
    <ContactForm />
  </Container>
);

export default LetsTalk;
