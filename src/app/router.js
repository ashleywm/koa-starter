const koaRouter = require('koa-router')
const fs = require('fs')
const path = require('path')

const router = new koaRouter()

const routes = path.join(__dirname, '..', 'routes')

const generateRoute = (filename) => `/${filename.replace(/\.[^/.]+$/, "")}`


fs.readdirSync(routes).forEach((filename) => {
    if (~filename.indexOf('.js')) {
        router.use(generateRoute(filename), require(`${routes}/${filename}`))
    }
})

module.exports = router