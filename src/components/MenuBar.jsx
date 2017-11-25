import React from "react";
import s from "styled-components";

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
  color: white !important;
  border-radius: 999em;
  white-space:nowrap;
`;

const MenuBar = () => (
  <Navbar>
    <ul>
      <li>
        <a href="#">home</a>
      </li>
      <li>
        <a href="#">services</a>
      </li>
      <li>
        <a href="#">portfolio</a>
      </li>
      <li>
        <Contact href="#">contact us</Contact>
      </li>
    </ul>
  </Navbar>
);

export default MenuBar;
