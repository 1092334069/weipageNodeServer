class LoginInfoModel {
	constructor() {	
		this.phone = ''
		this.uid = 0
		this.token = ''
		this.updateTime = new Date()
	}
	getPhone() {
		return this.phone
	}
	setPhone(phone) {
		this.phone = phone
	}
	getUid() {
		return this.uid
	}
	setUid(uid) {
		this.uid = parseInt(uid)
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
