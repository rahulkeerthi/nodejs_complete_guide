const path = require("path")

const express = require("express")

const rootDir = require("../util/path")
const adminData = require("./admin")

const router = express.Router()

router.get("/", (req, res, next) => {
	const products = adminData.products // we have access to the products array from admin.js
	res.render("shop", { prods: products, docTitle: "Shop", path: "/" }) // pass an object with data to render
	// res.sendFile(path.join(rootDir, "views", "shop.html"))
})

module.exports = router
