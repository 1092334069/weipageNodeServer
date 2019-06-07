function selectOneCallback(res, callback) {
	if (res) {
		if (Array.isArray(res)) {
			if (res.length) {
				callback(res[0])
			} else {
				callback(null)
			}
		} else if (typeof res === 'object') {
			callback(res)
		}
	} else {
		callback()
	}
}

function selectListCallback(res, callback) {
	if (res) {
		if (Array.isArray(res)) {
			if (res.length) {
				callback({
					list: JSON.parse(JSON.stringify(res))
				})
				return
			}
		}
	}
	callback({list: []})
}

function parseLimit(param) {
	if (!param || !param.page || !param.size) {
		return ''
	} else {
		const pageSize = (parseInt(param.page) - 1) * parseInt(param.size)
		return `limit ${pageSize},${param.size}`
	}
}

module.exports = {
	selectOneCallback,
	selectListCallback,
	parseLimit
}