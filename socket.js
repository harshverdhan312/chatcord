const { Server } = require("socket.io");
const chatController = require("./controllers/chatController");

async function setupSocket(server) {
  const io = new Server(server);
  chatController(io);
}

module.exports = setupSocket;
