"use strict";

var path = require("path");

var logger;

function setup(a, b, c) {
  a.get(b, function(req, res) {
    res.sendFile(path.join(__dirname, "log-tv.html"));
  });

  logger = c.of("logger");
  logger.on("connection", function(socket) {
    log("You are connected to the log-tv service!");
  });
}

function log(a) {
  var date = new Date()
    .toISOString()
    .replace(/T/, " ") // replace T with a space
    .replace(/\..+/, ""); // delete the dot and everything after
  logger.emit("log", "[" + date + "] " + a);
}

module.exports.setup = setup;
module.exports.log = log;
