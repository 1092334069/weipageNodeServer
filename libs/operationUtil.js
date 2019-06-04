function getToken() {
	const time = new Date().getTime()
	const random = Math.floor(Math.random() * 1000000)
	return time.toString() + random.toString()
}

function getPhoneCode() {
	return Math.floor(Math.random() * 1000000)
}

module.exports = {
	getToken,
	getPhoneCode
}
