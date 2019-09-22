const express = require('express')
const http = require('http')
const bodyParser = require("body-parser")
const querystring = require('querystring')
const multiparty = require('multiparty')

const httpUtil = require('./libs/httpUtil')
const interfaceRouter = require('./interfaceRouter/index')

const app = express()

app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}))

var server = app.listen(9090, function () {
	console.log('listen 9090')
})

function requestAction(req, res) {
	const pathname = httpUtil.parsePathName(req)
	const param = httpUtil.parseParam(req)
	interfaceRouter.interfaceAction(pathname, param, (ret) => {
		res.json(JSON.parse(JSON.stringify(ret)))
	})
}

app.get('*', requestAction)

app.post('*', requestAction)
