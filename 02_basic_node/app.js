const http = require("http") // import global http module
const routes = require("./routes")

const server = http.createServer(routes)

server.listen(3000)
console.log("Server running...")
