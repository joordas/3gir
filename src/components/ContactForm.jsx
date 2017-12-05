import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.12);
  padding: 37px 53px;
  border-radius: 3px;
  max-width: 1100px;
  flex-wrap: wrap;
  margin: 0 auto;
  z-index: 100;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 20px 10px;
  }
  @media (max-width: 800px) {
    grid-template-rows: 5fr 2fr;
  }
`;

const Align = styled.div`
  margin: 0 auto;
`;

const Form = styled.form``;

const InputGroup = styled.div`
  padding-bottom: 60px;
  @-moz-document url-prefix() {
    // this targets only mozilla browsers, as using the same 'background' property in the select element doesn't work for the custom arrow.
    &.select {
      background: url("/public/img/arrow.svg") no-repeat right 70px;
    }
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Label = styled.label`
  font-family: var(--font-montserrat);
  font-weight: 400;
  color: var(--black);
  font-size: 1.625rem;
  margin-right: 20px;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

const TextInput = styled.input`
  font-family: var(--font-montserrat);
  font-weight: 400;
  color: var(--blue);
  font-size: 1.75rem;
  border-radius: 10px;
  background-color: var(--mediumGrey);
  border: none;
  caret-color: var(--pink);
  padding: 8px 3px;
  width: 100%;
  &::placeholder {
    color: var(--darkGrey);
    opacity: 0.6;
    @media (max-width: 700px) {
      text-align: center;
    }
  }
  &:focus {
    outline: none;
  }
  &:invalid {
    box-shadow: none;
  }
`;

const Select = styled.select`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 1.675rem;
  text-align: center;
  text-align-last: center;
  width: 100%;
  color: var(--blue) !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
  background-color: transparent;
  background: url("/public/img/arrow.svg") no-repeat right center;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--blue);
  margin: 20px 0;
  border-radius: 3px;
  &:focus,
  &:active {
    outline: none;
  }
  option {
    font-family: var(--font-montserrat) !important;
    color: var(--blue) !important;
    font-weight: 400 !important;
    font-size: 1.675rem !important;
    text-align: center !important;
    text-align-last: center !important;
  }
`;
const TextArea = styled.textarea`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 1.675rem;
  color: var(--blue);
  z-index: 10;
  margin-top: 10px;
  resize: none;
  caret-color: var(--pink);
  background-color: var(--mediumGrey);
  border-radius: 3px;
  border: none;
  padding: 6px 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 700px) {
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 1rem;
  }
  &::placeholder {
    font-family: var(--font-montserrat);
    font-weight: 400;
    font-size: 1.675rem;
    opacity: 0.6;
    color: var(--darkGrey);
    @media (max-width: 700px) {
      font-weight: 300px;
      font-size: 1.35rem;
    }
  }
  // &:hover {
  //   box-shadow: 10px 14px 38px rgba(0, 0, 0, 0.14),
  //     6px 6px 16px rgba(0, 0, 0, 0.1);
  // }
`;

const Send = styled.input`
  font-family: var(--font-montserrat);
  font-weight: 500;
  font-size: 1.275rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  border-radius: 10px;
  background-color: var(--blue);
  padding: 16px 16px;
  color: white;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  margin-top: -50px;
  margin-bottom: 10px;
  width: 100%;
  background-color: ${props => (props.sent ? "mediumseagreen" : "var(--blue)")};
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
    letter-spacing: 5px;
  }
  @media (max-width: 700px) {
    // max-width: 90vw;
    // margin: 0 40px 20px;
  }
`;

const LeftPanel = styled.div`
  // it's actually the right panel, but I don't want to change the name now.
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  span {
    color: #5b5b5b;
    font-family: var(--font-raleway);
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 5px;
  }
  @media (max-width: 800px) {
    justify-content: center;
    max-height: 400px;
  }
  & > * {
    padding-bottom: 20px;
  }
`;
const Illustration = styled.img`
  max-width: 100vw;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 250px;
  }
`;

const ContactInfo = styled.div`
  a {
    font-weight: 400;
    color: #6a6a6a;
    font-family: var(--font-montserrat);
    font-size: 1.875rem;
    transition-duration: 0.2s;
    &:hover {
      border-bottom: 1px solid var(--blue);
    }
  }

  span {
    font-family: var(--font-raleway);
    font-weight: 700;
    font-size: 2rem;
    color: var(--blue);
  }
`;

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "webdesign",
    messageContent: "",
    formSent: false
  };

  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  handleSubjectChange = e => {
    const subject = e.target.value;
    this.setState({ subject });
  };

  handleMessageChange = e => {
    const messageContent = e.target.value;
    this.setState({ messageContent });
  };

  handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    const form = document.getElementById("contact-form");
    const { name, email, subject, messageContent } = this.state;
    const body = JSON.stringify({ name, email, subject, messageContent });
    // form.reset();
    fetch("/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body
    })
      .then(() =>
        this.setState({
          name: "",
          email: "",
          subject: "webdesign",
          messageContent: "",
          formSent: true
        })
      )
      .catch(error => {
        console.error(error);
      });
  };
  renderOptions = options => {
    return options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  render() {
    const options = [
      "webdesign",
      "e-commerce",
      "logo design",
      "branding",
      "just talk",
      "others"
    ]; // change here to add more options or edit the subject selector
    return (
      <Align>
        <Wrapper>
          <Form onSubmit={this.handleSubmit} id="contact-form">
            <InputGroup>
              <TextInput
                type="text"
                id="name"
                name="name"
                placeholder="tell us your name"
                value={this.state.name}
                onChange={this.handleNameChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <TextInput
                type="email"
                name="email"
                placeholder="...and your email address"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
            </InputGroup>
            <InputGroup className="select">
              <Label htmlFor="subject">pick a subject</Label>
              <Select
                id="subject"
                value={this.state.value}
                onChange={this.handleSubjectChange}
              >
                {this.renderOptions(options)}
              </Select>
            </InputGroup>
            <InputGroup>
              <TextArea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="and write us something! We’ll get back to you very soon ;)"
                value={this.state.messageContent}
                onChange={this.handleMessageChange}
                required
                minlength="5"
              />
            </InputGroup>
            <Send
              type="submit"
              value={this.state.formSent ? "message sent!" : "Submit ➡️"}
              sent={this.state.formSent}
            />
          </Form>
          <LeftPanel>
            <Illustration src="/public/img/contact.svg" />
            <span>or</span>
            <ContactInfo>
              <span>@</span>{" "}
              <a href="mailto:contact@3gir.com">contact@3gir.com</a>
            </ContactInfo>
          </LeftPanel>
        </Wrapper>
      </Align>
    );
  }
}

export default ContactForm;
