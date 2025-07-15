const { createClient } = require("redis");
const { createAdapter } = require("@socket.io/redis-adapter");

async function setupRedisAdapter(io) {
  const pubClient = createClient({ url: "redis://127.0.0.1:6379" });
  await pubClient.connect();
  const subClient = pubClient.duplicate();
  await subClient.connect();
  io.adapter(createAdapter(pubClient, subClient));
}

module.exports = { setupRedisAdapter };
