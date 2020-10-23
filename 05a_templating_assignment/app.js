const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const userData = require("./routes/users")
app.use(bodyParser.urlencoded({ extended: false }))

app.set("view engine", "ejs")
app.set("views", "views")

app.use(userData.routes)

app.get("/", (req, res, next) => {
	res.render("index")
})

app.use((req, res, next) => {
	res.status(404).render("404")
})

app.listen(3000)
