const aesUtil = require('./aesUtil')

function parsePathName(req) {
	if (req && req._parsedUrl) {
		return req._parsedUrl.pathname
	} else {
		return ''
	}
}

function parseParam(req) {
	if (req && req.query) {
		if (req.query.userIdStr) {
			req.query['userId'] = parseInt(aesUtil.decrypt(req.query.userIdStr))
		} else {
			req.query['userId'] = 0
		}
		return req.query
	} else {
		return {}
	}
}

module.exports = {
	parsePathName,
	parseParam
}