const PhoneCodeService = require('../service/phoneCodeService.js')
const PhoneCodeModel = require('../model/phoneCodeModel.js')
const parseResult = require('../libs/parseResult.js')

class LoginInfo {
	/*
	*	手机号码验证码登陆
	*	param {
	*		phone 	手机号码
	*		code 	验证码
	*	}
	*/
	phoneCodeLogin(param, callback) {
		if (!param) {
			callback(parseResult.missParam('缺少参数'))
			return
		}
		if (!param.phone) {
			callback(parseResult.missParam('缺少手机号码'))
			return
		}
		if (!param.code) {
			callback(parseResult.missParam('缺少验证码'))
			return
		}

		const phoneCodeService = new PhoneCodeService()
		const phoneCodeModel = new PhoneCodeModel()
		phoneCodeModel.setPhone(param.phone)

		phoneCodeService.select(phoneCodeModel, function(res) {
			callback(parseResult.success(res))
		}, function(res) {
			callback(parseResult.sqlException())
		})
	}
	/*
	*	手机号密码登陆
	*	param {
	*		phone 		手机号码
	*		password 	密码
	*	}
	*/
	phonePasswordLogin(param, callback) {
		if (!param) {
			callback(parseResult.missParam('缺少参数'))
			return
		}
		if (!param.phone) {
			callback(parseResult.missParam('缺少手机号码'))
			return
		}
		if (!param.password) {
			callback(parseResult.missParam('缺少密码'))
			return
		}
		callback()
	}
}

module.exports = LoginInfo
