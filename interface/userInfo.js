const UserInfoService = require('../service/userInfoService')
const UserInfoModel = require('../model/userInfoModel')

const resultUtil = require('../libs/resultUtil')

class UserInfo {
	/*
	*	获取用户详情
	*	param {
	*		userId 	用户id
	*	}
	*/
	getUserDetail(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.userId) {
			callback(resultUtil.unLogin('未登录'))
			return
		}

		const userInfoService = new UserInfoService()
		const userInfoModel = new UserInfoModel()
		userInfoModel.setId(param.userId)

		userInfoService.select(userInfoModel, (res) => {
			if (res) {
				callback(resultUtil.success(res))
			} else {
				callback(resultUtil.searchEmpty('未找到该用户'))
			}
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = UserInfo
