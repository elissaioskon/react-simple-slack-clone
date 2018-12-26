import React from "react";
import PropTypes from "prop-types";

// Components
import Message from "../Message";

// Styled
import { Container } from "./styled";

const propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, text: PropTypes.string })
  )
};

const MessageList = ({ messages }) => (
  <Container>
    {messages.map(({ id, content, sender }) => (
      <Message key={id} content={content} sender={sender} />
    ))}
  </Container>
);

MessageList.propTypes = propTypes;
export default MessageList;
