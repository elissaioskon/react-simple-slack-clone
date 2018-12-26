import React from "react";
import PropTypes from "prop-types";

// Styled
import { Container, Form, Input, TiPlus } from "./styled";

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

const NewRoomForm = ({ className }) => (
  <Container className={className}>
    <Form>
      <Input type="text" placeholder="New Room Name" />
      <TiPlus />
    </Form>
  </Container>
);

NewRoomForm.propTypes = propTypes;
NewRoomForm.defaultProps = defaultProps;
export default NewRoomForm;
