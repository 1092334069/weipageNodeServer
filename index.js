const express = require('express')
const http = require('http')
const bodyParser = require("body-parser")
const querystring = require('querystring')
const multiparty = require('multiparty')

const parseHttp = require('./libs/parseHttp')


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

var server = app.listen(8090, function () {
	console.log('listen 8090')
})

app.get('*', function (req, res) {
  console.log(req.method)
  const pathname = parseHttp.parsePathName(req)
  const param = parseHttp.parseParam(req)
  res.json(JSON.parse(JSON.stringify({
  	pathname: pathname,
  	param: param
  })))

})