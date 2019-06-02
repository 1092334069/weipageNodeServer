const UserInfoServie = require('../service/userInfoServie')
const UserInfoModel = require('../model/UserInfoModel')

const resultUtil = require('../libs/resultUtil')

class UserInfo {
	/*
	*	获取用户详情
	*	param {
	*		id 	用户id
	*	}
	*/
	getUserDetail(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.id) {
			callback(resultUtil.missParam('缺少id'))
			return
		}

		const userInfoServie = new UserInfoServie()
		const userInfoModel = new UserInfoModel()
		userInfoModel.setId(param.id)

		UserInfoServie.select(userInfoModel, function(res) {
			callback(resultUtil.success(res))
		}, function() {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	通过电话号码获取用户详情
	*	param {
	*		phone 	手机号码
	*	}
	*/
	getUserDetailByPhone(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.phone) {
			callback(resultUtil.missParam('缺少手机号码'))
			return
		}

		const userInfoServie = new UserInfoServie()
		const userInfoModel = new UserInfoModel()
		userInfoModel.setPhone(param.phone)

		UserInfoServie.selectByPhone(userInfoModel, function(res) {
			callback(resultUtil.success(res))
		}, function() {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = UserInfo
