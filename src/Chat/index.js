import React, { Fragment } from "react";
import { Global } from "@emotion/core";

import SendMessageForm from "../components/SendMessageForm";
import RoomList from "../components/RoomList";
import MessageList from "../components/MessageList";
import NewRoomForm from "../components/NewRoomForm";

import { globalCss, Container, MainContainer, Bottom } from "./styled";

const dummyData = {
  rooms: [
    { id: 1, name: "room1", isActive: false },
    { id: 2, name: "room2", isActive: false },
    { id: 3, name: "room3", isActive: false },
    { id: 4, name: "room4", isActive: false },
    { id: 5, name: "room5", isActive: true }
  ],
  messages: [
    { id: 1, content: "Hey 1", sender: "elissaios" },
    { id: 2, content: "Hey 2", sender: "george" },
    { id: 3, content: "Hey 3", sender: "antonis" },
    { id: 4, content: "Hey 4", sender: "elissaios" }
  ]
};

const Chat = () => (
  <Fragment>
    <Global styles={globalCss} />

    <Container>
      <MainContainer>
        <RoomList rooms={dummyData.rooms} />
        <MessageList messages={dummyData.messages} />
      </MainContainer>

      <Bottom>
        <NewRoomForm />
        <SendMessageForm />
      </Bottom>
    </Container>
  </Fragment>
);

export default Chat;
