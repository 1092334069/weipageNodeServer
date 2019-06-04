class LoginInfoModel {
	constructor() {	
		this.phone = ''
		this.token = ''
		this.updateTime = new Date()
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
