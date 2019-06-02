function modelToArray(model, keys) {
	if (!model) {
		return []
	}
	let keyList = []
	if (Array.isArray(keys)) {
		keyList = keys
	} else {
		keyList = keys.split(',')
	}
	let resList = []
	for (let i = 0; i < keyList.length; i++) {
		if (model.hasOwnProperty(keyList[i])) {
			resList.push(model[keyList[i]])
		}
	}
	return resList
}

module.exports = {
	modelToArray
}