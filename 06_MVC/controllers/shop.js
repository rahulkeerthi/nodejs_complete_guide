const Product = require("../models/product")

exports.getProducts = async (req, res, next) => {
	const products = await Product.fetchAll()
	res.render("shop/product-list", {
		prods: products,
		docTitle: "Shop",
		path: "/products",
	}) // pass an object with data to render
}

exports.getCart = (req, res, next) => {
	res.render("shop/cart", {
		docTitle: "Cart",
		path: "/cart",
	})
}

exports.getCheckout = (req, res, next) => {
	res.render("shop/checkout", {
		docTitle: "Checkout",
		path: "/checkout",
	})
}

exports.getIndex = async (req, res, next) => {
	const products = await Product.fetchAll()

	res.render("shop/index", {
		prods: products,
		docTitle: "Home",
		path: "/",
	})
}

exports.getOrders = (req, res, next) => {
	res.render("shop/orders", {
		docTitle: "Your Orders",
		path: "/orders",
	})
}
