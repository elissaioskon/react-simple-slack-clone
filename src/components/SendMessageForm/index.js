import React from "react";

import { Container, Input } from "./styled";
import {TiPlus} from "./styled";

// import PropTypes from "prop-types";
//
// const propTypes = {};
//
// const defaultProps = {};

const SendMessageForm = () => (
  <Container>
    <Input placeholder="Type Your Message"/>
    <TiPlus />
  </Container>
);

// SendMessageForm.propTypes = propTypes;
// SendMessageForm.defaultProps = defaultProps;
export default SendMessageForm;
