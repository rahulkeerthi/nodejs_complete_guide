const http = require("http")
const routes = require("./routes")

const server = http.createServer(routes)

// spin up a node.js server on port 3000
server.listen(3001)
console.log("Server running...")
