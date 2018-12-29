import React from "react";
import PropTypes from "prop-types";

// Styled
import { Container, Header } from "./styled";

const propTypes = {
  content: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired
};

const Message = ({ content, header }) => (
  <Container>
    {header && <Header>{header}</Header>}
    <div>{content}</div>
  </Container>
);

Message.propTypes = propTypes;
export default Message;
