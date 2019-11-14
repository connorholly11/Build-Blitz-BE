const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const UsersRouter = require("./data/users/users.router");
const ProjectsRouter = require("./data/projects/projects.router");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/users", UsersRouter);
server.use("/projects", ProjectsRouter);

module.exports = server;
