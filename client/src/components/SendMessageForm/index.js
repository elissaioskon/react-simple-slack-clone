// External
import React from "react";

// External Components
import { TiPlus } from "react-icons/ti";

import { Form, Input, Button } from "./styled";

import PropTypes from "prop-types";

const propTypes = {
  message: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,

  // Func
  onSubmit: PropTypes.func.isRequired,
  onMessageChange: PropTypes.func.isRequired
};

const defaultProps = {
  placeholder: ""
};

const SendMessageForm = ({
  onSubmit,
  onMessageChange,
  message,
  isDisabled,
  placeholder
}) => (
  <Form onSubmit={onSubmit} isDisabled={isDisabled}>
    <Input
      placeholder={placeholder}
      onChange={onMessageChange}
      value={message}
      disabled={isDisabled}
    />

    <Button type="submit" disabled={isDisabled || !message}>
      <TiPlus />
    </Button>
  </Form>
);

SendMessageForm.propTypes = propTypes;
SendMessageForm.defaultProps = defaultProps;
export default SendMessageForm;
