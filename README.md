# koa-starter
An opinionated [Koa](http://koajs.com/) starter project.

## About
This project starter has been built to get your Koa projects setup quickly so you can focus on coding!

Currently implemented:

* [Koa](https://github.com/koajs/koa)
* [koa-bodyparser](https://github.com/koajs/bodyparser)
* [koa-morgan](https://github.com/koa-modules/morgan)
* [koa-response-time](https://github.com/koajs/response-time)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [mongoose](https://github.com/Automattic/mongoose/)
* [winston](https://github.com/winstonjs/winston)
* [cross-env](https://github.com/kentcdodds/cross-env)
* [nodemon](https://github.com/remy/nodemon)

## Prerequisites
* [Node.js](https://nodejs.org/en/) (Version 8 or higher)

### Installation

* Clone the repository.
```
git clone https://github.com/ashleywm/koa-starter.git
```

* Install packages.
```
npm install
```

* Edit `app/config.json` to set environment variables (mongoDB, server host and port, debug level).

* Start it up.
```
npm run dev     // Development mode
npm start       // Production
```