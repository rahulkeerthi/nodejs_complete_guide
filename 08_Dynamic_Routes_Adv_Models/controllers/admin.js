const Product = require("../models/product")

exports.getAddProduct = (req, res, next) => {
	res.render("admin/edit-product", {
		docTitle: "Add Product",
		path: "/admin/add-product",
	})
}

exports.postAddProduct = (req, res, next) => {
	try {
		const { title, description, price, imageUrl } = req.body
		const product = new Product(title, imageUrl, description, price)
		product.save()
		res.redirect("products")
	} catch (err) {
		console.log(err)
		return res.redirect("/admin/add-product")
	}
}

exports.getEditProduct = async (req, res, next) => {
	try {
		const prodId = req.params.productId
		const product = await Product.findById(prodId)
		if (!product) {
			return res.redirect("/")
		}
		res.render("admin/edit-product", {
			docTitle: "Edit Product",
			path: "/admin/edit-product",
			product: product,
		})
	} catch (err) {
		console.log(err)
		return res.redirect("/admin/products")
	}
}

exports.postEditProduct = async (req, res, next) => {
	try {
		const { title, description, price, imageUrl, id } = req.body
		const product = new Product(title, imageUrl, description, price, id)
		product.update()
		res.redirect("products")
	} catch (err) {
		const { id } = req.body
		const product = await Product.findById(id)
		res.render("admin/edit-product", {
			docTitle: "Edit Product",
			path: "/admin/edit-product",
			product: product,
			errors: err,
		})
	}
}
exports.postDeleteProduct = async (req, res, next) => {
	const prodId = req.params.productId
	try {
		Product.delete(prodId)
		res.redirect("/admin/products")
	} catch (err) {
		console.log(err.message)
		res.redirect("/admin/products")
	}
}

exports.getProducts = async (req, res, next) => {
	try {
		const products = await Product.fetchAll()
		res.render("admin/product-list", {
			prods: products,
			hasProducts: products.length > 0,
			docTitle: "Shop",
			path: "/admin/products",
		})
	} catch (err) {
		console.log(err)
		return res.redirect("/admin/products")
	}
}
