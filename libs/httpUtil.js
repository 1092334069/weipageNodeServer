const aesUtil = require('./aesUtil')

function parsePathName(req) {
	if (req && req._parsedUrl) {
		return req._parsedUrl.pathname
	} else {
		return ''
	}
}

function parseParam(req) {
	let param = {}
	if (req) {
		if (req.method === 'POST') {
			param = req.body
		} else {
			param = req.query
		}
		if (param.userIdStr) {
			param['userId'] = parseInt(aesUtil.decrypt(param.userIdStr))
		} else {
			param['userId'] = 0
		}
	}
	return param
}

module.exports = {
	parsePathName,
	parseParam
}