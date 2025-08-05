const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("El websocket esta activo");
});

module.exports = router;