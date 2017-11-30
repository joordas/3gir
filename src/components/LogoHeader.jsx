import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  padding: 20px 20px 50px;
  max-width: 800px;
  position: relative;
  left: 200px; // best choice? think again later pls;
  @media (max-width: 1024px) {
    position: static;
    padding-left: 70px;
    padding-right: 0;
  }
  @media (max-width: 700px) {
    padding-left: 20px;
  }
`;

const WeAre = styled.span`
  color: var(--black);
  font-family: var(--font-montserrat);
  font-weight: 500;
  font-size: 1.75rem;
  text-transform: lowercase;
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
    font-size: 1.125rem;
  }
  @media (max-width: 700px) {
    padding-top: 20px;
    padding-left: 0;
    margin-left: 0;
  }
`;

const LogoSVG = styled.img`
  height: 54px;
  width: 198px;
  @media (max-width: 700px) {
    padding-left: 0px;
  }
`;

const Align = styled.span`
  display: flex;
  margin-left: 80px;
  padding-top: 10px;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    margin-left: 0;
    align-items: flex-start;
  }
`;

const LogoHeader = () => (
  <Logo>
    <div>
      <WeAre>we are</WeAre>
      <Align>
        <LogoSVG src="/public/img/2.svg" alt="3GiR Logo" />
        <Gradient>— affordable web services.</Gradient>
      </Align>
    </div>
  </Logo>
);

export default LogoHeader;
