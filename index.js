const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const ENV=require("dotenv")
ENV.config()

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})