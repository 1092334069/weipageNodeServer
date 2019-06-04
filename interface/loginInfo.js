const LoginInfoService = require('../service/loginInfoService')
const LoginInfoModel = require('../model/loginInfoModel')
const PhoneCodeService = require('../service/phoneCodeService')
const PhoneCodeModel = require('../model/phoneCodeModel.js')
const PhonePasswordService = require('../service/phonePasswordService')
const PhonePasswordModel = require('../model/phonePasswordModel')
const UserInfoService = require('../service/userInfoService')
const UserInfoModel = require('../model/userInfoModel')

const resultUtil = require('../libs/resultUtil')
const operationUtil = require('../libs/operationUtil')
const userUtil = require('../libs/userUtil')

/*
*	用户注册
*	param {
*		phone 	手机号码
*	}
*/
function register(param, callback, errorCallback) {
	if (!param || !param.phone) {
		errorCallback(resultUtil.missParam('缺少手机号码'))
		return
	}

	const userInfoService = new UserInfoService()
	const userInfoModel = new UserInfoModel()
	userInfoModel.setPhone(param.phone)
	userInfoService.insert(userInfoModel, function(res) {
		insertToken(param, callback, errorCallback)
	}, function() {
		errorCallback(resultUtil.sqlException())
	})
}

/*
*	新增登录token	（该接口在注册的时候调用）
*	param {
*		phone 	手机号码
*	}
*/
function insertToken(param, callback, errorCallback) {
	if (!param || !param.phone) {
		errorCallback(resultUtil.missParam('缺少手机号码'))
		return
	}

	const loginInfoService = new LoginInfoService()
	const loginInfoModel = new LoginInfoModel()
	loginInfoModel.setPhone(param.phone)
	loginInfoModel.setToken(operationUtil.getToken())
	loginInfoModel.setUpdateTime(new Date())

	loginInfoService.insert(loginInfoModel, callback, function() {
		errorCallback(resultUtil.sqlException())
	})
}

/*
*	校验是否新用户
*	param {
*		phone 	手机号码
*	}
*/
function checkIsRegister(param, callback, errorCallback) {
	const loginInfoService = new LoginInfoService()
	const loginInfoModel = new LoginInfoModel()
	loginInfoModel.setPhone(param.phone)
	loginInfoService.checkIsRegister(loginInfoModel, function(res) {
		if (res) {
			callback()
		} else {
			errorCallback()
		}
	}, function() {
		errorCallback(resultUtil.sqlException())
	})
}

/*
*	重新设置登录token
*	param {
*		phone 	手机号码
*	}
*/
function resetToken(param, callback, errorCallback) {
	if (!param || !param.phone) {
		errorCallback(resultUtil.missParam('缺少手机号码'))
		return
	}

	checkIsRegister(param, function() {
		const loginInfoService = new LoginInfoService()
		const loginInfoModel = new LoginInfoModel()
		loginInfoModel.setPhone(param.phone)
		loginInfoModel.setToken(operationUtil.getToken())
		loginInfoModel.setUpdateTime(new Date())

		loginInfoService.update(loginInfoModel, callback, function() {
			errorCallback(resultUtil.sqlException())
		})
	}, function() {
		register(param, callback, errorCallback)
	})
}

/*
*	通过手机号码获取登录状态
*	param {
*		phone 	手机号码
*	}
*/
function getLoginToken(param, callback, errorCallback) {
	if (!param || !param.phone) {
		errorCallback(resultUtil.missParam('缺少手机号码'))
		return
	}

	const loginInfoService = new LoginInfoService()
	const loginInfoModel = new LoginInfoModel()
	loginInfoModel.setPhone(param.phone)

	resetToken(param, function() {
		loginInfoService.select(loginInfoModel, function(res) {
			callback(resultUtil.success({
				phone: res.phone,
				token: res.token
			}, '登录成功'))
		}, function() {
			errorCallback(resultUtil.sqlException())
		})
	}, errorCallback)
	
}

class LoginInfo {
	/*
	*	发送手机验证码
	*	param {
	*		phone 	手机号码
	*	}
	*/
	sendPhoneCode(param, callback) {
		if (!param || !param.phone) {
			callback(resultUtil.missParam('缺少手机号码'))
			return
		}

		const phoneCodeService = new PhoneCodeService()
		const phoneCodeModel = new PhoneCodeModel()
		phoneCodeModel.setPhone(param.phone)
		phoneCodeModel.setUpdateTime(new Date())
		phoneCodeModel.setCode(operationUtil.getPhoneCode())

		phoneCodeService.select(phoneCodeModel, function(res) {
			if (res) {
				phoneCodeService.update(phoneCodeModel, function() {
					callback(resultUtil.success({}, '获取验证码成功'))
				}, function() {
					callback(resultUtil.sqlException())
				})
			} else {
				phoneCodeService.insert(phoneCodeModel, function() {
					callback(resultUtil.success({}, '获取验证码成功'))
				}, function() {
					callback(resultUtil.sqlException())
				})
			}
		}, function() {
			callback(resultUtil.sqlException())
		})
	}
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
				getLoginToken({param, callback, callback)
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
				getLoginToken(param, callback, callback)
			} else {
				callback(resultUtil.conditionError('密码错误'))
			}
		}, function(res) {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = LoginInfo
