const config = require('../config.json')

exports.get = (key) => {
  return process.env[key] || config[key]
}