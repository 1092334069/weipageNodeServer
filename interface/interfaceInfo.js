const InterfaceInfoService = require('../service/interfaceInfoService')
const InterfaceInfoModel = require('../model/interfaceInfoModel')

const resultUtil = require('../libs/resultUtil')

class InterfaceInfo {
	/*
	*	新增接口
	*	param {
	*		name 			接口名称
	*		type 			接口请求类型（默认值为get）
	*		url 			接口地址
	*		param 			接口参数数组对象（jsonstring）
	*						[{key:'', name:'', type:''}]	参数标示，参数名称，参数数据格式（默认为string）
	*		dataType		接口返回数据格式（默认为json）
	*		callbackParam	接口回调参数（jsonstring）
	*						[{key:'', name:'', type:'', child:[]}]	参数标示，参数名称，参数数据格式（默认为string），子参数（当type为object或array时使用）
	*	}
	*/
	insert(param, callback, errorCallback) {
		if (!param) {
			errorCallback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.userId) {
			callback(resultUtil.unLogin('未登录'))
			return
		}
		if (!param.name) {
			errorCallback(resultUtil.missParam('缺少接口名称'))
			return
		}
		if (!param.url) {
			errorCallback(resultUtil.missParam('缺少接口地址'))
			return
		}
		
		const interfaceInfoService = new InterfaceInfoService()
		const interfaceInfoModel = new InterfaceInfoModel()
		interfaceInfoModel.setName(param.name)
		interfaceInfoModel.setType(param.type || 'get')
		interfaceInfoModel.setUrl(param.url)
		interfaceInfoModel.setParam(param.param || '')
		interfaceInfoModel.setDataType(param.dataType || 'json')
		interfaceInfoModel.setCallbackParam(param.callbackParam || '')
		interfaceInfoModel.setUserId(param.userId)

		interfaceInfoService.insert(interfaceInfoModel, (res) => {
			if (res && res.id) {
				callback(resultUtil.success({
					interfaceId: res.id
				}, '创建成功'))
			} else {
				callback(resultUtil.conditionError('创建失败'))
			}
		}, () => {
			errorCallback(resultUtil.sqlException())
		})
	}
	/*
	*	修改接口
	*	param {
	*		interfaceId 	接口id
	*		name 			接口名称
	*		type 			接口请求类型（默认值为get）
	*		url 			接口地址
	*		param 			接口参数数组对象（jsonstring）
	*						[{key:'', name:'', type:''}]	参数标示，参数名称，参数数据格式（默认为string）
	*		dataType		接口返回数据格式（默认为json）
	*		callbackParam	接口回调参数（jsonstring）
	*						[{key:'', name:'', type:'', child:[]}]	参数标示，参数名称，参数数据格式（默认为string），子参数（当type为object或array时使用）
	*	}
	*/
	update(param, callback, errorCallback) {
		if (!param) {
			errorCallback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.userId) {
			callback(resultUtil.unLogin('未登录'))
			return
		}
		if (!param.interfaceId) {
			errorCallback(resultUtil.missParam('缺少接口id'))
			return
		}
		if (!param.name) {
			errorCallback(resultUtil.missParam('缺少接口名称'))
			return
		}
		if (!param.url) {
			errorCallback(resultUtil.missParam('缺少接口地址'))
			return
		}
		
		const interfaceInfoService = new InterfaceInfoService()
		const interfaceInfoModel = new InterfaceInfoModel()
		interfaceInfoModel.setId(param.interfaceId)
		interfaceInfoModel.setName(param.name)
		interfaceInfoModel.setType(param.type || 'get')
		interfaceInfoModel.setUrl(param.url)
		interfaceInfoModel.setParam(param.param || '')
		interfaceInfoModel.setDataType(param.dataType || 'json')
		interfaceInfoModel.setCallbackParam(param.callbackParam || '')
		interfaceInfoModel.setUserId(param.userId)

		interfaceInfoService.update(interfaceInfoModel, (res) => {
			callback(resultUtil.success(res))
		}, () => {
			errorCallback(resultUtil.sqlException())
		})
	}
}

module.exports = InterfaceInfo
