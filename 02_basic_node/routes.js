const fs = require("fs") // import global fs module

const requestHandler = (req, res) => {
	const url = req.url
	const method = req.method
	if (url === "/") {
		res.write("<html>")
		res.write("<head><title>My First App</title></head>")
		res.write("<body><form action='/message' method='POST'><input type='text' name='message' /><button type='Submit'>Send</button></form></body>")
		res.write("</html>")
		return res.end()
	}
	if (url === "/message" && method === "POST") {
		const body = []
		req.on("data", chunk => {
			body.push(chunk)
		})
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString()
			const message = parsedBody.split("=")[1]
			fs.writeFile("message.txt", message, err => {
				res.writeHead(302, { Location: "/" })
				return res.end()
			})
		})
	}
	res.setHeader("Content-Type", "text/html")
	res.write("<html>")
	res.write("<head><title>My First App</title></head>")
	res.write("<body><h1>Hello from my node.js app!</h1></body>")
	res.write("</html>")
	res.end()
}

module.exports = requestHandler
// same as exports.requestHandler = requestHandler
// and module.exports = {
//  requestHandler: requestHandler
// }
