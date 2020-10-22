const requestHandler = (req, res) => {
	const url = req.url
	const method = req.method

	// handle "/" route with greeting text and a form input (username)
	if (url === "/") {
		res.setHeader("Content-Type", "text/html")
		res.write("<html>")
		res.write("<head><title>Basic Assignment</title></head>")
		res.write("<body><h1>Hello! Welcome to my assignment submission!</h1><br><form action='/create-user' method='POST'><input type='text' name='username' /><button type='Submit'>Send</button></form></body>")
		res.write("</html>")
		return res.end()
	}

	// handle "/users" route with dummy users ul.li user1
	if (url === "/users") {
		res.setHeader("Content-Type", "text/html")
		res.write("<html>")
		res.write("<head><title>Basic Assignment</title></head>")
		res.write("<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li><li>User 5</li></ul><br><a href='/'>Back</a></body>")
		res.write("</html>")
		return res.end()
	}

	// add "/create-user" route and parse incoming data - log it to console
	if (url === "/create-user" && method === "POST") {
		const body = []
		req.on("data", chunk => {
			body.push(chunk)
		})
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString()
			const username = parsedBody.split("=")[1]
			console.log(username)
			res.writeHead(302, { Location: "/users" })
			return res.end()
		})
	}
}

module.exports = requestHandler
