const PhoneCodeService = require('../service/phoneCodeService.js')
const PhoneCodeModel = require('../model/phoneCodeModel.js')

class LoginInfo {
	constructor() {
		
	}
	phoneCodeLogin(phone, code) {
		const phoneCodeService = new PhoneCodeService()
		const phoneCodeModel = new PhoneCodeModel()
		phoneCodeModel.setPhone(phone)
		phoneCodeService.select(phoneCodeModel, function(res) {
			console.log(res)
		}, function() {
			console.log('excepction')
		})
	}
}

module.exports = LoginInfo
