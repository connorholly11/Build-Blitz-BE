const express = require("express");
const db = require("./users.model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "there was a 500 server error on getting users"
      });
    });
});

module.exports = router;
