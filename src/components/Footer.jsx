import React, { Component } from "react";
import styled from "styled-components";
import scrollToElement from "scroll-to-element";

const Footerz = styled.div`
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0px 50px;
  border-radius: 2px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.3);
  margin-top: 60px;
  .footer-link {
    display: flex;
    align-items: center;
  }
  a {
    color: var(--blue);
    font-weight: 200;
    font-family: var(--font-montserrat);
    text-decoration: none;
    font-size: 1.4rem;
    padding: 0px 20px;
    margin-left: 10px;
  }

  #btn-contact {
    color: white;
    padding: 10px 15px;
    border-radius: 35px;
    background-color: var(--pink);
    font-weight: 200;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Footerz>
        <div className="footer-link">
          <a href="#">home</a>
          <a href="#">services</a>
          <a href="#">portfolio</a>
          <a href="#">about us</a>
        </div>
        <div
          onClick={() => scrollToElement("#services")}
          className="footer-contact"
        >
          <a id="btn-contact">contact us</a>
        </div>
      </Footerz>
    );
  }
}

export default Footer;
