

# log-tv

A super simple library to display realtime logs of your node application in the browser.

## Installation

    npm install log-tv --save

## How to use

log-tv makes use of express and socket.io, so you will need those installed in your app.

    var ltv = require('log-tv');

    var app = require('express')();
    var server = require('http').createServer(app);
    var io = require('socket.io')(server);

    ltv.setup(app, "/log", io);	
    ...
    server.listen(3000);

    // Now anywhere in your code, add some log messages
    ltv.log("Server is listening on port 3000");

Now open your browser and point to the /log endpoint:

    http://localhost:3000/log

The page that load will display your logs in real-time:

    [2018-03-26 16:29:15] You are connected to the log-tv service!
    [2018-03-26 16:29:22] A log message...
    [2018-03-26 16:30:01] Another log message...


## License

[MIT](LICENSE)

## Todo

- add string.format log string with require('util')
- style up the log screen
- keep the old log(...) statements in the log-tv console
