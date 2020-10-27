const Product = require("../models/product")

exports.getAddProduct = (req, res, next) => {
	res.render("add-product", {
		docTitle: "Add Product",
		path: "/admin/add-product",
	})
}

exports.postAddProduct = (req, res, next) => {
	// products.push({ title: req.body.title }) // add the new product to the products array
	const product = new Product(req.body.title)
	product.save()
	res.redirect("/")
}

exports.getProducts = async (req, res, next) => {
	const products = await Product.fetchAll()
	res.render("shop", {
		prods: products,
		hasProducts: products.length > 0,
		docTitle: "Shop",
		path: "/",
	}) // pass an object with data to render
}
