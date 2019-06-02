const LoginInfoService = require('../service/loginInfoService')
const LoginInfoModel = require('../model/loginInfoModel')
const PhoneCodeService = require('../service/phoneCodeService')
const PhoneCodeModel = require('../model/phoneCodeModel.js')
const PhonePasswordService = require('../service/phonePasswordService')
const PhonePasswordModel = require('../model/phonePasswordModel')

const resultUtil = require('../libs/resultUtil.js')
const operationUtil = require('../libs/operationUtil.js')

class LoginInfo {
	/*
	*	新增登录token	（该接口在注册的时候调用）
	*	param {
	*		phone 	手机号码
	*		uid 	用户id
	*	}
	*/
	insertToken(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.uid) {
			callback(resultUtil.missParam('缺少uid'))
			return
		}
		if (!param.phone) {
			callback(resultUtil.missParam('缺少手机号码'))
			return
		}
		const loginInfoService = new LoginInfoService()
		const loginInfoModel = new LoginInfoModel()
		loginInfoModel.setUid(param.uid)
		loginInfoModel.setPhone(param.phone)
		loginInfoModel.setToken(operationUtil.getToken())
		loginInfoModel.setUpdateTime(new Date())
		loginInfoService.insert(loginInfoModel, function(res) {
			callback(resultUtil.success(res))
		}, function() {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	重新设置登录token
	*	param {
	*		phone 	手机号码 (或)
	*		uid 	用户id
	*	}
	*/
	resetToken(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		const loginInfoService = new LoginInfoService()
		const loginInfoModel = new LoginInfoModel()
		loginInfoModel.setToken(operationUtil.getToken())
		loginInfoModel.setUpdateTime(new Date())
		if (param.uid) {
			loginInfoModel.setUid(param.uid)
			loginInfoService.updateTokenByUid(loginInfoModel, function(res) {
				callback(resultUtil.success(res))
			}, function(res) {
				callback(resultUtil.sqlException())
			})
		} else if (param.phone) {
			loginInfoModel.setPhone(param.phone)
			loginInfoService.updateTokenByPhone(loginInfoModel, function(res) {
				callback(resultUtil.success(res))
			}, function(res) {
				callback(resultUtil.sqlException())
			})
		} else {
			callback(resultUtil.missParam('缺少uid或手机号码'))
		}
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
				callback(resultUtil.success(res))
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
				callback(resultUtil.success(res))
			} else {
				callback(resultUtil.conditionError('密码错误'))
			}
		}, function(res) {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = LoginInfo
