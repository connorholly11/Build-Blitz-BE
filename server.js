const express = require("express");
const cors = require("cors");
const UsersRouter = require("./data/users/users.router");

const server = express();

server.use(express.json());
server.use("/api", UsersRouter);

module.exports = server;
