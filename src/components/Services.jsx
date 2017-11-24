import React from "react";
import s from "styled-components";

const Container = s.div`
  // margin-left: 200px;
  position: relative;
  display: flex;
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

const LilguyArm = s.img`
position: absolute;
top: 0;
right: 150px;
`;

const ServicesPanel = s.div`
  background-color: #f2f2f2;
  box-shadow: 0 0 8px 0 rgba( 0, 0, 0, 0.2);
  flex-grow: 1;
  height: 400px; // shouldn't be fixed
  margin-top: 200px;
  margin-right: 200px;
  margin-left: 100px;
`;

const Services = () => (
  <Container>
    <LilguyArm id="arm" src="/public/img/lilguyarm.svg" />
    <div className="whatwedo">
      <What>what</What>
      <We>we</We>
      <Do>do</Do>
    </div>
    <ServicesPanel>
      <h1>hey</h1>
    </ServicesPanel>
  </Container>
);

export default Services;
