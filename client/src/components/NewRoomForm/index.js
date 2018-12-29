import React from "react";
import PropTypes from "prop-types";

// Styled
import { Container, Form, Input, TiPlus, SubmitButton } from "./styled";

const propTypes = {
  value: PropTypes.string.isRequired,

  // Functions
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const NewRoomForm = ({ onChange, onSubmit, value }) => (
  <Container>
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="New Room Name"
        value={value}
        onChange={onChange}
      />
      <SubmitButton type="submit" disabled={!value}>
        <TiPlus />
      </SubmitButton>
    </Form>
  </Container>
);

NewRoomForm.propTypes = propTypes;
export default NewRoomForm;
