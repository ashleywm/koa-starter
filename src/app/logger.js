'use strict'

const winston = require('winston');
const config = require('./config');

const logFormat = winston.format.printf((info) => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
})

module.exports.logger = winston.createLogger({
    level: config.get('LOG_LEVEL'),
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.label({ label: config.get('APP_NAME') }),
        winston.format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        winston.format(info => {
            info.level = info.level
            // info.level.toUpperCase() || null
            return info
        })(),
        logFormat
    )
})