const Product = require("../models/product")

exports.getAddProduct = (req, res, next) => {
	res.render("admin/add-product", {
		docTitle: "Add Product",
		path: "/admin/add-product",
	})
}

exports.postAddProduct = (req, res, next) => {
	const { title, description, price, imageUrl } = req.body
	const product = new Product(title, imageUrl, description, price)
	product.save()
	res.redirect("/products")
}

exports.getProducts = async (req, res, next) => {
	const products = await Product.fetchAll()
	res.render("admin/product-list", {
		prods: products,
		hasProducts: products.length > 0,
		docTitle: "Shop",
		path: "/admin/products",
	}) // pass an object with data to render
}
