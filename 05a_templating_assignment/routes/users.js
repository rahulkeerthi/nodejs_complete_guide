const express = require("express")
const router = express.Router()
const users = []

router.post("/users", (req, res, next) => {
	users.push({ name: req.body.name })
	res.redirect("/users")
})

router.get("/users", (req, res, next) => {
	res.render("users", { users: users })
})

exports.users = users
exports.routes = router
