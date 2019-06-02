const express = require('express')
const http = require('http')
const bodyParser = require("body-parser")
const querystring = require('querystring')
const multiparty = require('multiparty')

const httpUtil = require('./libs/httpUtil.js')
const interfaceRouter = require('./interfaceRouter/index.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

var server = app.listen(9090, function () {
	console.log('listen 9090')
})

function requestAction(req, res) {
	const pathname = httpUtil.parsePathName(req)
	const param = httpUtil.parseParam(req)
	interfaceRouter.interfaceAction(pathname, param, function(ret) {
		res.json(JSON.parse(JSON.stringify(ret)))
	})
}

app.get('*', requestAction)

app.post('*', requestAction)
