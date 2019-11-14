const db = require("../db.config");

module.exports = {
  getProjects,
  addProject,
  editProject,
  deleteProject
};

function getProjects() {
  return db("projects");
}

function addProject(newProject) {
  return db("projects").insert(newProject);
}

function editProject(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes);
}

function deleteProject(id) {
  return db("projects")
    .where("id", "=", id)
    .del();
}
