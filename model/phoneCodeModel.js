class PhoneCodeModel {
	constructor() {
		this.phone = ''
		this.code = ''
		this.updateTime = new Date()
	}
	getPhone() {
		return this.phone
	}
	setPhone(phone) {
		this.phone = phone
	}
	getCode() {
		return this.phone
	}
	setCode(code) {
		this.code = code
	}
	getUpdateTime() {
		return this.updateTime
	}
	setUpdateTime(updateTime) {
		this.updateTime = new Date(updateTime)
	}
}

module.exports = PhoneCodeModel
