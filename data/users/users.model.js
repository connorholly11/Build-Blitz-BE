const db = require("../db.config");

module.exports = {
  getUsers,
  addUser,
  editUser
};

function getUsers() {
  return db("users");
}

function addUser(newUser) {
  return db("users").insert(newUser);
}

function editUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}
