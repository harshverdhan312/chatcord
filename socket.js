const { Server } = require("socket.io");
const chatController = require("./controllers/chatController");
const { setupRedisAdapter } = require("./utils/redisClient");

async function setupSocket(server) {
  const io = new Server(server);
  await setupRedisAdapter(io);
  chatController(io);
}

module.exports = setupSocket;
