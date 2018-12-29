export const colors = {
  main: {
    borderColor: "grey",
    disabledBorderColor: "darkgrey",
    color: "black",
    disabledColor: "darkgrey"
  },
  messageListBgColor: "#5ea3d0",
  messageListTextColor: "white",
  roomList: { bgColor: "#4D394B" },
  room: { hoverBgColor: "#3E313C", activeBgColor: "#31262f", color: "#ACA5AB" },
  "secondary-color": "white",
  "main-text-color": "#3e5869",
  "secondary-text-color": "white",
  "send-message-form": "#F5F5F5"
};

export const dimensions = {
  chatRightBarWidth: 200,
  chatBottomHeight: 45
};

export const socketEvents = {
  GET_ROOMS: "GET_ROOMS",
  SEND_ROOMS: "SEND_ROOMS",

  ADD_NEW_ROOM: "ADD_NEW_ROOM",
  NEW_ROOM_ADDED: "NEW_ROOM_ADDED",

  SELECT_ROOM: "SELECT_ROOM",
  SEND_ROOM_DATA: "SEND_ROOM_DATA",

  NEW_MESSAGE: "NEW_MESSAGE",
  SEND_MESSAGE: "SEND_MESSAGE",

  ADD_USER_IN_ROOM: "ADD_USER_IN_ROOM",
  NEW_USER_IN_ROOM: "NEW_USER_IN_ROOM",

  LEAVE_ROOM: "LEAVE_ROOM",

  ALL_DATA_CLEARED: "ALL_DATA_CLEARED"
};
