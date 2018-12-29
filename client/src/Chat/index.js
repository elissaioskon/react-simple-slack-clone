// External
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import {Global} from "@emotion/core";

// External helpers
import uuid from "uuid/v4";
import memoize from "memoize-one";

// Utils
import {socketEvents} from "../constants";

// Components
import SendMessageForm from "../components/SendMessageForm";
import RoomList from "../components/RoomList";
import MessageList from "../components/MessageList";
import NewRoomForm from "../components/NewRoomForm";

// Styled
import {
    globalCss,
    Container,
    MainContainer,
    BottomContainer,
    NoChannel,
    MessageListContainer
} from "./styled";

class Chat extends Component {
    static propTypes = {
        username: PropTypes.string
    };


    state = {
        socket: io(process.env.REACT_APP_API_URL),
        sendMessageInputValue: "",
        rooms: [],
        selectedRoom: null,
        newRoomValue: ""
    };

    messageListRef = React.createRef();

    componentDidMount() {
        const {socket} = this.state;

        // Emit get rooms event, server will respond with Send rooms
        socket.emit(socketEvents.GET_ROOMS);

        // At send rooms save rooms to state
        socket.on(socketEvents.SEND_ROOMS, rooms =>
            this.setState({
                rooms: rooms.map(room => ({
                    ...room,
                    isActive: false
                }))
            })
        );

        // Listen for new rooms and add them to state
        socket.on(socketEvents.NEW_ROOM_ADDED, newRoom => {
            this.setState(({rooms}) => ({
                rooms: [
                    ...rooms,
                    {
                        ...newRoom,
                        active: false
                    }
                ]
            }));
        });

        // At all data cleared clear rooms, selectedRoom
        socket.on(socketEvents.ALL_DATA_CLEARED, () =>
            this.setState({
                rooms: [],
                selectedRooms: []
            })
        );
    }

    handleSendMessageChange = e => {
        this.setState({sendMessageInputValue: e.target.value});
    };

    handleSendMessageSubmit = e => {
        e.preventDefault();

        const {sendMessageInputValue, selectedRoom} = this.state;

        this.state.socket.emit(socketEvents.SEND_MESSAGE, {
            roomName: selectedRoom.name,
            message: {
                username: this.props.username,
                content: sendMessageInputValue
            }
        });

        this.setState({sendMessageInputValue: ""});
    };

    handleNewRoomChange = e => {
        this.setState({newRoomValue: e.target.value});
    };

    handleNewRoomSubmit = e => {
        e.preventDefault();

        const newRoomName = this.state.newRoomValue;

        // Clear new room input
        this.setState({newRoomValue: ""});

        this.state.socket.emit(socketEvents.ADD_NEW_ROOM, newRoomName);
    };

    handleRoomClick = (index, roomName) => {
        const {selectedRoom, socket} = this.state;
        const {username} = this.props;

        if (!!selectedRoom) {
            // If clicked roomName is the same with previous room return
            if (selectedRoom.name === roomName) return;

            // Case user change room, leave previous room
            this.state.socket.emit(socketEvents.LEAVE_ROOM, selectedRoom.name);

            // Emit add user in room and because we are already subscribed
            // to room events from previous call of handleRoomClick return
            return this.state.socket.emit(socketEvents.ADD_USER_IN_ROOM, {
                username,
                roomName
            });
        }


        this.state.socket.emit(socketEvents.ADD_USER_IN_ROOM, {
            username,
            roomName
        });

        // At send room data update state
        socket.on(socketEvents.SEND_ROOM_DATA, roomData => {
            this.setState(({rooms}) => ({
                selectedRoom: roomData,
                rooms: rooms.map(room => ({
                    ...room,
                    isActive: room.name === roomData.name
                }))
            }));
        });

        // At new messages update state
        socket.on(socketEvents.NEW_MESSAGE, message => {
            this.setState(
                ({selectedRoom}) => ({
                    selectedRoom: {
                        ...selectedRoom,
                        messages: [...selectedRoom.messages, message]
                    }
                }),
                () => {
                    if (message.username === this.state.username) {
                        this.scrollToMessageListBottom();
                    }
                }
            );
        });

        // At new user to room, update state
        socket.on(socketEvents.NEW_USER_IN_ROOM, ({username}) => {
            this.setState(({selectedRoom}) => ({
                selectedRoom: {
                    ...selectedRoom,
                    messages: [
                        ...selectedRoom.messages,
                        {
                            username,
                            content: "",
                            id: uuid()
                        }
                    ]
                }
            }));
        });
    };

    scrollToMessageListBottom = () => {
        this.messageListRef.current.scrollToBottom();
    };

    formatMessages = memoize(selectedRoom =>
        selectedRoom.messages.map(message => {
            const {content, username} = message;

            if (content.length > 0) {
                return {
                    ...message,
                    header: `${message.username}:`
                };
            }

            return {
                ...message,
                header: "Info:",
                content: `User ${username} just connected to channel.`
            };
        })
    );

    render() {

        const {
            sendMessageInputValue,
            newRoomValue,
            rooms,
            selectedRoom
        } = this.state;

        return (
            <Fragment>
                <Global styles={globalCss}/>

                <Container>
                    <MainContainer>
                        <RoomList rooms={rooms} onRoomClick={this.handleRoomClick}/>
                        <MessageListContainer>
                            {!!selectedRoom ? (
                                <MessageList
                                    messages={this.formatMessages(selectedRoom)}
                                    emptyMessage="Channel has no messages yet"
                                    ref={this.messageListRef}
                                />
                            ) : (
                                <NoChannel>No room selected</NoChannel>
                            )}
                        </MessageListContainer>
                    </MainContainer>

                    <BottomContainer>
                        <NewRoomForm
                            onChange={this.handleNewRoomChange}
                            onSubmit={this.handleNewRoomSubmit}
                            value={newRoomValue}
                        />
                        <SendMessageForm
                            onSubmit={this.handleSendMessageSubmit}
                            onMessageChange={this.handleSendMessageChange}
                            message={sendMessageInputValue}
                            isDisabled={!selectedRoom}
                            placeholder={
                                !!selectedRoom ? "Type your Message" : "No room selected"
                            }
                        />
                    </BottomContainer>
                </Container>
            </Fragment>
        );
    }
}

export default Chat;
