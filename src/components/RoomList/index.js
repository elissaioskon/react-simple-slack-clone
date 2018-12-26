import React from "react";
// import PropTypes from "prop-types";

import { Container, Room } from "./styled";

// const propTypes = {
//   className: PropTypes.string,
//   rooms: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       id: PropTypes.number,
//       isActive: PropTypes.bool
//     }).isRequired
//   )
// };
//
// const defaultProps = {
//   className: ""
// };

const RoomList = ({ rooms }) => (
  <Container>
    {rooms.map(({ id, name, isActive }) => (
      <Room key={id}>{name}</Room>
    ))}
  </Container>
);

// RoomList.propTypes = propTypes;
// RoomList.defaultProps = defaultProps;
export default RoomList;
