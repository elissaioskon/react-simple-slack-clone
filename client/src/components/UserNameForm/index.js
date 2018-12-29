import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { UsernameInput, UsernameSubmitBtn, Form } from "./styled";
import { FaPlus } from "react-icons/fa";

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const UsernameForm = ({ onSubmit, onChange, value }) => {
  const isDisabled = !value;

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <UsernameInput
          type="text"
          placeholder="Type your username"
          onChange={onChange}
          onSubmit={onSubmit}
          value={value}
        />
        <UsernameSubmitBtn type="submit" disabled={isDisabled}>
          <FaPlus />
        </UsernameSubmitBtn>
      </Form>
    </Fragment>
  );
};

UsernameForm.propTypes = propTypes;
export default UsernameForm;
