const UserInfoServie = require('../service/userInfoServie')
const UserInfoModel = require('../model/UserInfoModel')

const resultUtil = require('../libs/resultUtil')

class UserInfo {
	/*
	*	获取用户详情
	*	param {
	*		uid 	用户id
	*	}
	*/
	getUserDetail(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.uid) {
			callback(resultUtil.missParam('缺少id'))
			return
		}

		const userInfoServie = new UserInfoServie()
		const userInfoModel = new UserInfoModel()
		userInfoModel.setId(param.uid)

		UserInfoServie.select(userInfoModel, (res) => {
			callback(resultUtil.success(res))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = UserInfo
