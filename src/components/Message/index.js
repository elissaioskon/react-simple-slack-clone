import React from "react";
import PropTypes from "prop-types";

// Styled
import { Container, Sender, Content } from "./styled";

const propTypes = {
  content: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired
};

const Message = ({ content, sender }) => (
  <Container>
    <Sender>{sender}</Sender>
    <Content>{content}</Content>
  </Container>
);

Message.propTypes = propTypes;
export default Message;
