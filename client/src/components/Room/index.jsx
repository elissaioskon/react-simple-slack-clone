import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styled";

const propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,

  // Functions
  onClick: PropTypes.func.isRequired
};

const defaultProps = {
  isActive: false
};

const Room = ({ index, onClick, name, isActive }) => (
  <Container isActive={isActive} onClick={() => onClick(index, name)}>
    {name}
  </Container>
);

Room.propTypes = propTypes;
Room.defaultProps = defaultProps;
export default Room;
