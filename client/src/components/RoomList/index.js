// External
import React from "react";
import PropTypes from "prop-types";

// Styled
import { Container, NoRoomsAvailable } from "./styled";

// Components
import Room from "../Room";

const propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isActive: PropTypes.bool,

      // Functions
      onRoomClick: PropTypes.bool
    }).isRequired
  )
};

const RoomList = ({ rooms, onRoomClick }) => (
  <Container>
    {rooms.length > 0 ? (
      rooms.map(({ name, isActive }, index) => (
        <Room
          key={name}
          name={name}
          isActive={isActive}
          onClick={onRoomClick}
          index={index}
        />
      ))
    ) : (
      <NoRoomsAvailable> No Rooms Available</NoRoomsAvailable>
    )}
  </Container>
);

RoomList.propTypes = propTypes;
export default RoomList;
