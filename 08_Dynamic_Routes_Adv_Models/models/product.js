const fs = require("fs").promises
const path = require("path")
const rootDir = require("../util/path")
const p = path.join(rootDir, "data", "products.json")

const getProductsFromFile = async () => {
	let products = []
	try {
		data = await fs.readFile(p)
		products = JSON.parse(data)
	} catch (err) {
		console.log(err)
	}
	return products
}

module.exports = class Product {
	constructor(title, imageUrl, description, price) {
		this.title = title
		this.imageUrl = imageUrl
		this.description = description
		this.price = price
	}

	async save() {
		this.id = Math.round(Math.random() * 1000000).toString()
		let products = await getProductsFromFile()
		products.push(this)
		try {
			await fs.writeFile(p, JSON.stringify(products))
		} catch (err) {
			console.log(err)
		}
	}

	static async fetchAll() {
		const products = await getProductsFromFile()
		return products
	}

	static async findById(prodId) {
		const products = await getProductsFromFile()
		const product = products.find(product => {
			return product.id === prodId
		})
		return product
	}
}
