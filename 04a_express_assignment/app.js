const express = require("express")
const app = express()

// app.use((req, res, next) => {
//   next()
// })
// app.use((req, res, next) => {
//   res.send("<h1>2nd part of assignment done!</h1>")
// })

app.use("/users", (req, res, next) => {
	console.log("/users as required")
	// console.log(req.url)
	res.send("<h1>This is my Express Assignment (users)!</h1>")
})

app.use("/", (req, res, next) => {
	console.log("/ as required")
	console.log(req.url)

	res.send("<h1>This is my Express Assignment (root)!</h1>")
})

app.listen(3001)
