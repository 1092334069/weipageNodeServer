class LoginInfoModel {
	constructor() {	
		this.userId = 0
		this.phone = ''
		this.token = ''
		this.updateTime = new Date()
	}
	getUserId() {
		return this.userId
	}
	setUserId(userId) {
		this.userId = parseInt(userId)
	}
	getPhone() {
		return this.phone
	}
	setPhone(phone) {
		this.phone = phone
	}
	getToken() {
		return this.token
	}
	setToken(token) {
		this.token = token
	}
	getUpdateTime() {
		return this.updateTime
	}
	setUpdateTime(updateTime) {
		this.updateTime = new Date(updateTime)
	}
}

module.exports = LoginInfoModel
