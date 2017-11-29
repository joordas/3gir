import React from "react";
import s from "styled-components";
import scrollToElement from "scroll-to-element";

const Navbar = s.div`
  display: flex;
  flex-direction: column;
  justify-content: 'space-between';
  align-items: flex-end;
  flex-wrap: wrap;
  padding-right: 200px;
  padding-top: 20px;
  ul {
    display: flex;
  }
  a {
    font-family: var(--font-montserrat);
    font-weight: 300;
    color: var(--blue);
    font-size: 1.5rem;
    padding: 10px 20px;
  }
  ul > li {
    margin: 0 10px;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    align-items: flex-start;
    a {
      font-size: 1.2rem;
      font-weight: 400; 
    }
  }
`;

const Contact = s.a`
  background-color: var(--pink);
  font-weight: 400 !important;
  color: white !important;
  border-radius: 999em;
  white-space:nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const scrollOptions = {
  offset: -20,
  ease: "in-out-cube",
  duration: 2000
};

const MenuBar = () => (
  <Navbar id="home">

    <ul>
      {/* <li>
        <a href="#">home</a>
      </li> */}
      <li>
        <a onClick={() => scrollToElement("#services", scrollOptions)}>
          services
        </a>
      </li>
      {/* <li>
        <a onClick={() => scrollToElement('#portfolio')}>portfolio</a>
      </li> */}
      <li>
        <Contact onClick={() => scrollToElement("#contact", scrollOptions)}>
          let's talk!
        </Contact>
      </li>
    </ul>
  </Navbar>
);

export default MenuBar;
