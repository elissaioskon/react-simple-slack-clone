// External utils
import uuid from 'uuid/v4'

// Store
import {rooms} from '../store'

// Types
import socketEventTypes from './eventTypes'

export default io => {
    io.on(socketEventTypes.CONNECTION, socket => {
        console.log('A client was connected successfully');

        socket.on(socketEventTypes.DISCONNECT, ()=>{
            console.log('user disconnected');
        });

        socket.on(socketEventTypes.ADD_USER_IN_ROOM, ({username, roomName}) => {

            socket.join(roomName);

            const currentRoomIndex = rooms.findIndex(({name}) => name === roomName);
            const currentRoom = rooms[currentRoomIndex];

            // Send to just joined in room user room data
            socket.emit(socketEventTypes.SEND_ROOM_DATA, currentRoom);

            // Send to other users that message
            socket.to(roomName).emit(socketEventTypes.NEW_USER_IN_ROOM, {username,roomName})

        });

        socket.on(socketEventTypes.GET_ROOMS, () => {
            // Send all room names
            io.to(socket.id).emit(socketEventTypes.SEND_ROOMS, rooms.map(({name}) => ({name})));
        });


        socket.on(socketEventTypes.ADD_NEW_ROOM, newRoomName => {
            rooms.push({name: newRoomName, messages: []});

            // Send only name to subscribers
            io.emit(socketEventTypes.NEW_ROOM_ADDED, {name: newRoomName});
        });

        socket.on(socketEventTypes.SEND_MESSAGE, ({roomName,message}) => {
            const roomIndex = rooms.findIndex(({name}) => name === roomName);
            const newMessage = {...message, id: uuid()};
            rooms[roomIndex].messages.push(newMessage);

            io.in(roomName).emit(socketEventTypes.NEW_MESSAGE, newMessage);
        });

        socket.on(socketEventTypes.LEAVE_ROOM, roomName=> {
            socket.leave(roomName);
        })
    });
};



