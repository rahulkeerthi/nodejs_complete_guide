const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const pagesController = require("./controllers/pages")

app.set("view engine", "pug") // set global config value for view engine on express app as pug (pug config is already included in express)
app.set("views", "views") // set the default folder for views files (default is views anyway)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use(pagesController.get404)

app.listen(3000)
