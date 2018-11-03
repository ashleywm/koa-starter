const User = require('../models/users')

exports.read = async () => {
  return User.find()
}

exports.create = async ({ data = {} } = {}) => {
  return User.create(data)
}