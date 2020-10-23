const path = require("path")

const express = require("express")

const rootDir = require("../util/path")

const router = express.Router()

const products = [] // initialize an empty array for storing products

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
	// HTML
	// res.sendFile(path.join(rootDir, "views", "add-product.html"))

	// PUG
	// res.render("add-product", { docTitle: "Add Product", path: "/admin/add-product" })

	// HANDLEBARS
	// res.render("add-product", { docTitle: "Add Product", path: "/admin/add-product", activeAddProduct: true, productCSS: true, formsCSS: true })

	// EJS
	res.render("add-product", { docTitle: "Add Product", path: "/admin/add-product", productCSS: true, formsCSS: true })
})

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
	products.push({ title: req.body.title }) // add the new product to the products array
	res.redirect("/")
})

exports.routes = router
exports.products = products // add a new key to the object exported
