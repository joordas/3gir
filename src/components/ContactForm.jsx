import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  padding: 60px 30px 30px;
  margin: 0 auto;
  background-color: var(--lightDarkBlue);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.08), 0 0 12px 2px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form``;

const InputGroup = styled.div`
  width: 100%;
  padding-bottom: 60px;
`;

const Label = styled.label`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 1.675rem;
  color: var(--lightGrey);
  display: block;
`;

const TextInput = styled.input`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 1.275rem;
  color: var(--blue);
  caret-color: var(--pink);
  flex-grow: 1;
  margin: 0 auto;
  width: calc(100% - 20px); //offsetting padding-left;
  appearance: none;
  border: 1px solid var(--lightGrey);
  padding: 6px 0;
  padding-left: 20px;
  border-radius: 3px;
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
  @media (max-width: 1400px) {
    font-size: 1.275rem;
  }
  @media (max-width: 800px) {
    font-size: 0.875rem;
  }
`;

const Select = styled.select`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 1.675rem;
  text-align: center;
  text-align-last: center;
  color: var(--yellow) !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--blue);
  margin: 20px 0;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  &:focus,
  &:active {
    outline: none;
  }
  option {
    font-family: var(--font-montserrat) !important;
    // color: var(--blue) !important;
    font-weight: 400 !important;
    font-size: 1.675rem !important;
    text-align: center !important;
    text-align-last: center !important;
  }
  @media (max-width: 1400px) {
    font-size: 1.275rem;
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
  padding: 6px 24px;
  &::placeholder {
    font-family: var(--font-montserrat);
    font-weight: 400;
    opacity: 0.6;
    color: var(--darkGrey);
  }
  @media (max-width: 1400px) {
    font-size: 1.275rem;
  }
  @media (max-width: 800px) {
    font-size: 0.875rem;
  }
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
            <Label htmlFor="subject">pick a subject:</Label>
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
              cols="20"
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
      </Wrapper>
    );
  }
}

export default ContactForm;
