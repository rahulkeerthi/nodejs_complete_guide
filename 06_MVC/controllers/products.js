const products = [] // initialize an empty array for storing products

exports.getAddProduct = (req, res, next) => {
	res.render("add-product", {
		docTitle: "Add Product",
		path: "/admin/add-product",
	})
}

exports.postAddProduct = (req, res, next) => {
	products.push({ title: req.body.title }) // add the new product to the products array
	res.redirect("/")
}

exports.getProducts = (req, res, next) => {
	res.render("shop", {
		prods: products,
		hasProducts: products.length > 0,
		docTitle: "Shop",
		path: "/",
	}) // pass an object with data to render
}
