const express = require('express')
const http = require('http')
const bodyParser = require("body-parser")
const querystring = require('querystring')
const multiparty = require('multiparty')

const parseHttp = require('./libs/parseHttp.js')
const interfaceRouter = require('./interfaceRouter/index.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

var server = app.listen(8090, function () {
	console.log('listen 8090')
})

function requestAction(req, res) {
	const pathname = parseHttp.parsePathName(req)
	const param = parseHttp.parseParam(req)
	interfaceRouter.interfaceAction(pathname, param, function(ret) {
		res.json(JSON.parse(JSON.stringify(ret)))
	})
}

app.get('*', requestAction)

app.post('*', requestAction)
