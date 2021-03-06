function selectCountCallback(res, key, callback) {
	if (res) {
		if (Array.isArray(res)) {
			if (res.length) {
				callback(res[0][key])
			} else {
				callback(0)
			}
		} else if (typeof res === 'object') {
			callback(res[key])
		}
	} else {
		callback(0)
	}
}

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
				let list = []
				for (let i = 0; i < res.length; i++) {
					const obj = {}
					for (let key in res[i]) {
						obj[key] = res[i][key]
					}
					list.push(obj)
				}
				callback({
					list
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
	selectCountCallback,
	selectOneCallback,
	selectListCallback,
	parseLimit
}