const LoginInfoService = require('../service/loginInfoService')
const LoginInfoModel = require('../model/loginInfoModel')

const resultUtil = require('./resultUtil')
/*
*	校验登录
*	param {
*		uid 	用户id
*		token	用户状态码
*	}
*/
function checkLogin(param, callback, errorCallback) {
	if (!param) {
		errorCallback(resultUtil.missParam('缺少参数'))
		return
	}
	if (!param.uid) {
		errorCallback(resultUtil.missParam('缺少uid'))
		return
	}
	if (!param.token) {
		errorCallback(resultUtil.missParam('缺少token'))
		return
	}

	const loginInfoService = new LoginInfoService()
	const loginInfoModel = new LoginInfoModel()
	loginInfoModel.setUid(param.uid)

	loginInfoService.selectByUid(loginInfoModel, function(res) {
		if (res && res.token && res.token === param.token) {
			callback(res)
		} else {
			errorCallback(resultUtil.conditionError('状态码错误'))
		}
	}, function() {
		errorCallback(resultUtil.sqlException())
	})
}
/*
*	通过手机号码获取登录状态
*	param {
*		phone 	手机号码
*	}
*/
function getLoginTokenByPhone(param, callback) {
	if (!param || !param.phone) {
		callback(resultUtil.missParam('缺少手机号码'))
		return
	}

	const loginInfoService = new LoginInfoService()
	const loginInfoModel = new LoginInfoModel()
	loginInfoModel.setPhone(param.phone)

	loginInfoService.selectByPhone(loginInfoModel, function(res) {
		callback(resultUtil.success({
			uid: res.uid,
			token: res.token
		}, '登录成功'))
	}, function() {
		callback(resultUtil.sqlException())
	})
}

/*
*	新增登录token	（该接口在注册的时候调用）
*	param {
*		phone 	手机号码
*		uid 	用户id
*	}
*/
function insertToken(param, callback) {
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
		callback(resultUtil.success(res, '新增token成功'))
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
function resetToken(param, callback) {
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
			callback(resultUtil.success(res, '重设token成功'))
		}, function(res) {
			callback(resultUtil.sqlException())
		})
	} else {
		callback(resultUtil.missParam('缺少uid或手机号码'))
	}
}

module.exports = {
	checkLogin,
	getLoginTokenByPhone,
	insertToken,
	resetToken
}
