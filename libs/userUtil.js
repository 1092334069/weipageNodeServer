const LoginInfoService = require('../service/loginInfoService')
const LoginInfoModel = require('../model/loginInfoModel')
const UserInfoService = require('../service/userInfoService')
const UserInfoModel = require('../model/userInfoModel')

const resultUtil = require('./resultUtil')
const operationUtil = require('./operationUtil')
/*
*	校验登录
*	param {
*		uid 	手机号码
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
			errorCallback(resultUtil.unLogin('未登录'))
		}
	}, function() {
		errorCallback(resultUtil.sqlException())
	})
}

module.exports = {
	checkLogin
}
