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

module.exports = {
	selectOneCallback
}