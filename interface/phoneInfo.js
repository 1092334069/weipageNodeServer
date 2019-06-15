const PhoneCodeService = require('../service/phoneCodeService')
const PhoneCodeModel = require('../model/phoneCodeModel')

const resultUtil = require('../libs/resultUtil')
const operationUtil = require('../libs/operationUtil')

class phoneInfo {
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

		phoneCodeService.select(phoneCodeModel, (res) => {
			if (res) {
				phoneCodeService.update(phoneCodeModel, () => {
					callback(resultUtil.success({}, '获取验证码成功'))
				}, () => {
					callback(resultUtil.sqlException())
				})
			} else {
				phoneCodeService.insert(phoneCodeModel, () => {
					callback(resultUtil.success({}, '获取验证码成功'))
				}, () => {
					callback(resultUtil.sqlException())
				})
			}
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = phoneInfo
