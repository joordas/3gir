import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 660px;
  z-index: 100;
`;

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
    padding-right: 20%;
  }
`;

const Label = styled.label`
  font-family: var(--font-montserrat);
  font-weight: 300;
  color: var(--black);
  font-size: 1.625rem;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TextInput = styled.input`
  font-family: var(--font-montserrat);
  font-weight: 500;
  font-size: 1.75rem;
  color: var(--black);
  border: none;
  border-bottom: 1px solid var(--blue);
  caret-color: var(--pink);
  padding: 1px 3px;
  &::placeholder {
    color: var(--blue);
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
  margin-top: 30px;
  resize: none;
  caret-color: var(--pink);
  background-color: white;
  border-radius: 3px;
  border: 1px solid var(--blue);
  padding: 6px 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 700px) {
    width: 120%;
  }
  &::placeholder {
    font-family: var(--font-montserrat);
    font-weight: 400;
    font-size: 1.675rem;
    opacity: 0.6;
    color: var(--blue);
    @media (max-width: 700px) {
      font-weight: 300px;
      font-size: 1.35rem;
    }
  }
  &:hover {
    box-shadow: 10px 14px 38px rgba(0, 0, 0, 0.14),
      6px 6px 16px rgba(0, 0, 0, 0.1);
  }
`;

const Send = styled.input`
  font-family: var(--font-montserrat);
  font-weight: 500;
  font-size: 1.275rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  border-radius: 2px;
  background-color: var(--blue);
  padding: 10px 16px;
  color: white;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  margin-top: -50px;
  margin-bottom: 100px;
  background-color: ${props => (props.sent ? "mediumseagreen" : "var(--blue)")};
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
    letter-spacing: 5px;
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
      <Form onSubmit={this.handleSubmit} id="contact-form">
        <InputGroup>
          <Label htmlFor="name">your name:</Label>
          <TextInput
            type="text"
            id="name"
            name="name"
            placeholder="Yuri Gagarin"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">your email:</Label>
          <TextInput
            type="email"
            name="email"
            placeholder="yuri@spacex.com"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
        </InputGroup>
        <InputGroup className="select">
          <Label htmlFor="subject">what do you want to talk to us about?</Label>
          <Select
            id="subject"
            value={this.state.value}
            onChange={this.handleSubjectChange}
          >
            {this.renderOptions(options)}
          </Select>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">write us a message:</Label>
          <TextArea
            name="message"
            id="message"
            cols="40"
            rows="5"
            placeholder="We’ll get back to you very soon! ;)"
            value={this.state.messageContent}
            onChange={this.handleMessageChange}
            required
            minlength="5"
          />
        </InputGroup>
        <Send
          type="submit"
          value={this.state.formSent ? "message sent!" : "send"}
          sent={this.state.formSent}
        />
      </Form>
    );
  }
}

export default ContactForm;
