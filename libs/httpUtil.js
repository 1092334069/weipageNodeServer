function parsePathName(req) {
	if (req && req._parsedUrl) {
		return req._parsedUrl.pathname
	} else {
		return ''
	}
}

function parseParam(req) {
	if (req) {
		return req.query
	} else {
		return {}
	}
}

module.exports = {
	parsePathName,
	parseParam
}