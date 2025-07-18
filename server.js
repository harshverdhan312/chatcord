const http = require("http");
const app = require("./app");
const setupSocket = require("./socket");
const dotenv = require("dotenv");
dotenv.config();

const server = http.createServer(app);
setupSocket(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
