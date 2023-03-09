// server.js
const http = require('http')
const app = require('./app/app')
require("dotenv").config()

http.createServer(app).listen(process.env.port, ()=> {
    console.log(`I am fully operational and all circuits are listening on ${process.env.port}`);
});
