const fs = require("fs").promises
const path = require("path")
const rootDir = require("../util/path")
const p = path.join(rootDir, "data", "cart.json")

module.exports = class Cart {
	static async addProduct(id, productPrice) {
		// Fetch previous cart item
		let cart = { products: [], totalPrice: 0 }
		try {
			data = await fs.readFile(p)
			cart = JSON.parse(data)
			cart.totalPrice = Number(cart.totalPrice)
		} catch (err) {
			console.log(err)
		}
		console.log(cart)
		// Analyse card and find existing product
		const existingProductIndex = cart.products.findIndex(product => product.id === id)
		const existingProduct = cart.products[existingProductIndex]
		// Add new product or increase quantity if already added
		let updatedProduct
		if (existingProduct) {
			updatedProduct = { ...existingProduct }
			updatedProduct.qty++
			cart.products = [...cart.products]
			cart.products[existingProductIndex] = updatedProduct
		} else {
			updatedProduct = { id: id, qty: 1 }
			cart.products = [...cart.products, updatedProduct]
		}
		cart.totalPrice += productPrice
		fs.writeFile(p, JSON.stringify(cart), err => console.log(err))
	}
}
