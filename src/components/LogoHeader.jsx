import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  padding: 20px 20px 100px;
  max-width: 800px;
  position: relative;
  left: 200px; // best choice? think again later pls;
  span {
    color: var(--black);
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: 1.75rem;
    text-transform: lowercase;
  }
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
`;

const LogoSVG = styled.img`
  height: 54px;
  width: 198px;
`;

const Align = styled.span`
  display: flex;
  margin-left: 80px;
  padding-top: 10px;
  align-items: center;
`;

const LogoHeader = () => (
  <Logo>
    <div>
      <span>we are</span>
      <Align>
        <LogoSVG src="/public/img/2.svg" alt="3GiR Logo" />
        <Gradient>— affordable web services.</Gradient>
      </Align>
    </div>
  </Logo>
);

export default LogoHeader;
