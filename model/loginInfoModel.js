class LoginInfoModel {
	constructor() {	
		this.uid = 0
		this.phone = ''
		this.token = ''
		this.updateTime = new Date()
	}
	getUid() {
		return this.uid
	}
	setUid(uid) {
		this.uid = parseInt(uid)
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
