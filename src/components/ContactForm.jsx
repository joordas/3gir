import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 660px;
`;

const InputGroup = styled.div`
  padding-bottom: 80px;
  @-moz-document url-prefix() {
    // this targets only mozilla browsers, as using the same 'background' property in the select element doesn't work for the custom arrow.
    &.select {
      background: url("/public/img/arrow.svg") no-repeat right center;
    }
  }
`;

const Label = styled.label`
  font-family: var(--font-montserrat);
  font-weight: 300;
  color: var(--black);
  font-size: 1.625rem;
  margin-right: 20px;
`;

const TextInput = styled.input`
  font-family: var(--font-montserrat);
  font-weight: 500;
  font-size: 1.75rem;
  color: var(--black);
  border: none;
  border-bottom: 1px solid var(--blue);
  caret-color: var(--pink);
  &::placeholder {
    color: var(--blue);
  }
`;

const Select = styled.select`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 1.675rem;
  text-align: center;
  text-align-last: center;
  width: 100%;
  color: var(--blue);
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
  &:focus,
  &:active {
    outline: none;
  }
  option {
    font-family: var(--font-montserrat);
    font-weight: 400;
    font-size: 2.675rem;
    text-align: center;
    text-align-last: center;
  }
`;

class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
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
      <Form onSubmit={this.handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">your name:</Label>
          <TextInput
            type="text"
            id="name"
            name="name"
            placeholder="Yuri Gagarin"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">your email:</Label>
          <TextInput type="text" name="email" placeholder="yuri@spacex.com" />
        </InputGroup>
        <InputGroup className="select">
          <Label htmlFor="email">what do you want to talk to us about?</Label>
          <Select>{this.renderOptions(options)}</Select>
        </InputGroup>
      </Form>
    );
  }
}

export default ContactForm;
