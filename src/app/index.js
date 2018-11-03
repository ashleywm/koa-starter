const Koa = require('koa')
const router = require('./router')
const config = require('./config')
const database = require('./database')
const bodyparser = require('koa-bodyparser')
const morgan = require('koa-morgan')
const { logger } = require('./logger')
const responseTime = require('koa-response-time')

const app = new Koa()

const onError = (err) => {
  logger.error('Unhandled exception occured: ' + err);
}

app.use(responseTime())
app.use(morgan('combined'))
app.use( bodyparser({
  enableTypes: ['json'],
  jsonLimit: '10mb'
}))
app.use(router.routes())
app.use(router.allowedMethods())
app.use(ctx => { ctx.type = 'json' })

app.on('error', onError)

exports.start = async () => {
  await database.connect().then(() => {
    logger.info('Database connection successful')
  }).catch((err) => {
    logger.error('Database connection failed: ' + err)
  })

  const server = await app.listen(config.get('PORT'), config.get('HOST'), () => {
    logger.info(`Server listening on ${config.get('HOST')}:${config.get('PORT')}, in ${config.get('ENV')} mode.`)
  })

  server.on('error', onError);
}