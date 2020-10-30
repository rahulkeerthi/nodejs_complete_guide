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
			if (data) {
				cart = JSON.parse(data)
				cart.totalPrice = Number(cart.totalPrice)
			}
		} catch (err) {
			console.log(err)
		}
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

	static async deleteProduct(id, productPrice) {
		try {
			data = await fs.readFile(p)
			let cart = JSON.parse(data)
			// cart.totalPrice = Number(cart.totalPrice)
			const updatedCart = { ...cart }
			const product = updatedCart.products.find(prod => prod.id === id)
			console.log(product)
			const productQty = product.qty
			updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty
			updatedCart.products = updatedCart.products.filter(prod => prod.id !== id)
			fs.writeFile(p, JSON.stringify(updatedCart), err => console.log(err))
		} catch (err) {
			console.log(err)
		}
	}
}
