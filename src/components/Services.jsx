import React from "react";
import s from "styled-components";

const Container = s.div`
  margin-left: 200px;
`;

const What = s.span`
  color: black;
`;
const We = s.span`
  color: var(--pink);
  `;
const Do = s.span`
  color: var(--blue);
`;

const Services = () => (
  <Container>
    <div className="whatwedo">
      <What>what</What>
      <We>we</We>
      <Do>do</Do>
    </div>
  </Container>
);

export default Services;
