const LoginInfoService = require('../service/loginInfoService')
const LoginInfoModel = require('../model/loginInfoModel')
const PhoneCodeService = require('../service/phoneCodeService')
const PhoneCodeModel = require('../model/phoneCodeModel.js')
const PhonePasswordService = require('../service/phonePasswordService')
const PhonePasswordModel = require('../model/phonePasswordModel')

const resultUtil = require('../libs/resultUtil')
const operationUtil = require('../libs/operationUtil')
const userUtil = require('../libs/userUtil')

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
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.phone) {
			callback(resultUtil.missParam('缺少手机号码'))
			return
		}
		if (!param.code) {
			callback(resultUtil.missParam('缺少验证码'))
			return
		}

		const phoneCodeService = new PhoneCodeService()
		const phoneCodeModel = new PhoneCodeModel()
		phoneCodeModel.setPhone(param.phone)

		phoneCodeService.select(phoneCodeModel, function(res) {
			if (res && res.code === param.code) {
				userUtil.getLoginTokenByPhone({
					phone: param.phone
				}, callback)
			} else {
				callback(resultUtil.conditionError('验证码错误'))
			}
		}, function(res) {
			callback(resultUtil.sqlException())
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
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.phone) {
			callback(resultUtil.missParam('缺少手机号码'))
			return
		}
		if (!param.password) {
			callback(resultUtil.missParam('缺少密码'))
			return
		}

		const phonePasswordService = new PhonePasswordService()
		const phonePasswordModel = new PhonePasswordModel()
		phonePasswordModel.setPhone(param.phone)

		phonePasswordService.select(phonePasswordModel, function(res) {
			if (res && res.password === param.password) {
				userUtil.getLoginTokenByPhone({
					phone: param.phone
				}, callback)
			} else {
				callback(resultUtil.conditionError('密码错误'))
			}
		}, function(res) {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = LoginInfo
