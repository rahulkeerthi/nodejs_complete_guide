// express
const express = require("express")
const app = express()

// routes
const userRouter = require("./routes/user")

// paths
const path = require("path")
const rootDir = require("./util/path")

// serve static files
app.use(express.static(path.join(rootDir, "public")))

// serve core routes
app.use(userRouter)
app.get("/", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "index.html"))
})

// start server
app.listen(3001)
console.log("Server running...")
