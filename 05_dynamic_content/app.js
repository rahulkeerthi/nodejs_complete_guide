const path = require("path")

const express = require("express")
const bodyParser = require("body-parser")
// HANDLEBARS
// const expressHbs = require("express-handlebars")

const app = express()

// HANDLEBARS
// app.engine("handlebars", expressHbs({ layoutsDir: "views/layouts/", defaultLayout: "main-layout" }))
// app.set("view engine", "handlebars") // set global config value for view engine on express app

// PUG
// app.set("view engine", "pug") // set global config value for view engine on express app as pug (pug config is already included in express)

// EJS
app.set("view engine", "ejs")

// GENERIC
app.set("views", "views") // set the default folder for views files (default is views anyway)

const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
	res.status(404).render("404", { docTitle: "Page Not Found" })
})

app.listen(3000)
