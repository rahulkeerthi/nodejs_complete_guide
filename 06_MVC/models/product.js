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
	constructor(title) {
		this.title = title
	}

	async save() {
		let products = await getProductsFromFile()
		products.push(this)
		fs.writeFile(p, JSON.stringify(products), err => {
			console.error(`error: ${err}`)
		})
	}

	static fetchAll() {
		const products = getProductsFromFile()
		return products
	}
}
