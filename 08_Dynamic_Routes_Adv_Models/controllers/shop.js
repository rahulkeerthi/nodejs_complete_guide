const Product = require("../models/product")
const Cart = require("../models/cart")

exports.getProducts = async (req, res, next) => {
	const products = await Product.fetchAll()
	res.render("shop/product-list", {
		prods: products,
		docTitle: "Shop",
		path: "/products",
	}) // pass an object with data to render
}

exports.getProduct = async (req, res, next) => {
	const prodId = req.params.productId
	const product = await Product.findById(prodId)
	res.render("shop/product-detail", {
		product: product,
		docTitle: product.title,
		path: "/products",
	})
}

exports.postCart = async (req, res, next) => {
	const prodId = req.body.productId
	const product = await Product.findById(prodId)
	Cart.addProduct(prodId, Number(product.price))
	res.redirect(`/cart`)
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
