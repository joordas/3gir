import React from "react";
import styled from "styled-components";

import ContactForm from "./ContactForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  min-height: 400px;
  padding-left: 200px;
  @media (max-width: 700px) {
    padding-left: 20%;
    align-items: center;
  }
`;

const Gradient = styled.span`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 8rem;
  flex-grow: 0;
  max-width: 570px;
  color: var(--blue);
  background: -webkit-linear-gradient(
    0deg,
    #3080ed 0%,
    #8160b7 54.31%,
    #ff2f64
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 40px;
  margin-bottom: 50px;
`;

const Triangles = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: -0;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const LetsTalk = () => (
  <Container id="contact">
    <Triangles src="/public/img/triangles.svg" />
    <Gradient>let's talk!</Gradient>
    <ContactForm />
  </Container>
);

export default LetsTalk;
