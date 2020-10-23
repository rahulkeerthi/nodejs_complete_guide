const path = require("path")

const express = require("express")

const rootDir = require("../util/path")
const adminData = require("./admin")

const router = express.Router()

router.get("/", (req, res, next) => {
	const products = adminData.products // we have access to the products array from admin.js

	// HTML
	// res.sendFile(path.join(rootDir, "views", "shop.html"))

	// PUG
	// res.render("shop", { prods: products, hasProducts: products.length > 0, docTitle: "Shop", path: "/" }) // pass an object with data to render

	// HANDLEBARS
	// res.render("shop", { prods: products, hasProducts: products.length > 0, docTitle: "Shop", path: "/", activeShop: true, productCSS: true }) // pass an object with data to render along with required handlebars data

	// EJS
	res.render("shop", { prods: products, docTitle: "Shop", path: "/" }) // pass an object with data to render along with required handlebars data
})

module.exports = router
