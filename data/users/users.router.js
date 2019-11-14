const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  res.send("im in the users router");
});

module.exports = router;
