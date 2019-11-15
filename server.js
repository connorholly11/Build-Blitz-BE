const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const UsersRouter = require("./data/users/users.router");
const ProjectsRouter = require("./data/projects/projects.router");
const TasksRouter = require("./data/tasks/tasks.router");
const TemplatesRouter = require("./data/templates/templates.router");
const TemplateTasksRouter = require("./data/templates-tasks/templates-tasks.router");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/users", UsersRouter);
server.use("/projects", ProjectsRouter);
server.use("/projects/tasks", TasksRouter);
server.use("/templates", TemplatesRouter);
server.use("/projects/tasks/templates", TemplateTasksRouter);

module.exports = server;
