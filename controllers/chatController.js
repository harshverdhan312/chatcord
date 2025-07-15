const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("../models/userModel");
const { formatMessage } = require("../models/messageModel");

const botName = "ChatCord Bot";

function chatController(io) {
  io.on("connection", (socket) => {
    // User joins room
    socket.on("joinRoom", ({ username, room }) => {
      const user = userJoin(socket.id, username, room);
      socket.join(user.room);

      // Welcome message
      socket.emit("message", formatMessage(botName, "Welcome to ChatCord!"));

      // Notify others
      socket.broadcast
        .to(user.room)
        .emit("message", formatMessage(botName, `${user.username} has joined the chat`));

      // Send room users
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    });

    // User sends chat message
    socket.on("chatMessage", (msg) => {
      const user = getCurrentUser(socket.id);
      io.to(user.room).emit("message", formatMessage(user.username, msg));
    });

    // User disconnects
    socket.on("disconnect", () => {
      const user = userLeave(socket.id);
      if (user) {
        io.to(user.room).emit("message", formatMessage(botName, `${user.username} has left the chat`));
        io.to(user.room).emit("roomUsers", {
          room: user.room,
          users: getRoomUsers(user.room),
        });
      }
    });

  });
}

module.exports = chatController;
