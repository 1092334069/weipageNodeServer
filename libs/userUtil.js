const LoginInfoService = require('../service/loginInfoService')
const LoginInfoModel = require('../model/loginInfoModel')
const UserInfoService = require('../service/userInfoService')
const UserInfoModel = require('../model/userInfoModel')

const resultUtil = require('./resultUtil')
const operationUtil = require('./operationUtil')
/*
*	校验登录
*	param {
*		userId 	手机号码
*		token	用户状态码
*	}
*/
function checkLogin(param, callback, errorCallback) {
	if (!param || !param.userId || !param.token) {
		errorCallback(resultUtil.unLogin('未登录'))
		return
	}

	const loginInfoService = new LoginInfoService()
	const loginInfoModel = new LoginInfoModel()
	loginInfoModel.setUserId(param.userId)

	loginInfoService.selectByUserId(loginInfoModel, (res) => {
		if (res && res.token && res.token === param.token) {
			callback(res)
		} else {
			errorCallback(resultUtil.unLogin('未登录'))
		}
	}, () => {
		errorCallback(resultUtil.sqlException())
	})
}

module.exports = {
	checkLogin
}
