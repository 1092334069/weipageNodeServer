class PhonePasswordModel {
	constructor() {
		this.phone = ''
		this.password = ''
		this.updateTime = new Date()
	}
	getPhone() {
		return this.phone
	}
	setPhone(phone) {
		this.phone = phone
	}
	getPassword() {
		return this.password
	}
	setPassword(password) {
		this.password = password
	}
	getUpdateTime() {
		return this.updateTime
	}
	setUpdateTime() {
		this.updateTime = new Date(updateTime)
	}
}

module.exports = PhonePasswordModel
