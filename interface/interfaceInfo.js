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
	insert(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.userId) {
			callback(resultUtil.unLogin('未登录'))
			return
		}
		if (!param.name) {
			callback(resultUtil.missParam('缺少接口名称'))
			return
		}
		if (!param.url) {
			callback(resultUtil.missParam('缺少接口地址'))
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
			callback(resultUtil.success({
				interfaceId: res.id
			}, '创建成功'))
		}, () => {
			callback(resultUtil.sqlException())
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
	update(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.userId) {
			callback(resultUtil.unLogin('未登录'))
			return
		}
		if (!param.interfaceId) {
			callback(resultUtil.missParam('缺少接口id'))
			return
		}
		if (!param.name) {
			callback(resultUtil.missParam('缺少接口名称'))
			return
		}
		if (!param.url) {
			callback(resultUtil.missParam('缺少接口地址'))
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
			callback(resultUtil.success(res, '修改成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	删除接口
	*	param {
	*		interfaceId 	接口id
	*	}
	*/
	delete(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.userId) {
			callback(resultUtil.unLogin('未登录'))
			return
		}
		if (!param.interfaceId) {
			callback(resultUtil.missParam('缺少接口id'))
			return
		}
		const interfaceInfoService = new InterfaceInfoService()
		const interfaceInfoModel = new InterfaceInfoModel()
		interfaceInfoModel.setId(param.interfaceId)
		interfaceInfoModel.setUserId(param.userId)

		interfaceInfoService.delete(interfaceInfoModel, (res) => {
			callback(resultUtil.success(res, '删除成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	接口详情
	*	param {
	*		interfaceId 	接口id
	*	}
	*/
	detail(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.userId) {
			callback(resultUtil.unLogin('未登录'))
			return
		}
		if (!param.interfaceId) {
			callback(resultUtil.missParam('缺少接口id'))
			return
		}

		const interfaceInfoService = new InterfaceInfoService()
		const interfaceInfoModel = new InterfaceInfoModel()
		interfaceInfoModel.setId(param.interfaceId)
		interfaceInfoModel.setUserId(param.userId)

		interfaceInfoService.select(interfaceInfoModel, (res) => {
			if (res) {
				callback(resultUtil.success({
					interfaceId: res.id,
					name: res.name,
					type: res.type,
					url: res.url,
					param: res.param,
					dataType: res.dataType,
					callbackParam: res.callbackParam
				}, '获取成功'))
			} else {
				callback(resultUtil.searchEmpty('未找到该接口'))
			}
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	接口分页列表
	*	param {
	*		page 	页码
	*		size	页量
	*	}
	*/
	getPageList(param, callback) {
		if (!param) {
			callback(resultUtil.missParam('缺少参数'))
			return
		}
		if (!param.userId) {
			callback(resultUtil.unLogin('未登录'))
			return
		}
		if (!param.page) {
			callback(resultUtil.missParam('缺少页码'))
			return
		}
		if (!param.size) {
			callback(resultUtil.missParam('缺少页量'))
			return
		}
		const interfaceInfoService = new InterfaceInfoService()
		const interfaceInfoModel = new InterfaceInfoModel()
		interfaceInfoModel.setUserId(param.userId)

		interfaceInfoService.selectPageList({
			model: interfaceInfoModel,
			page: param.page,
			size: param.size
		}, (res) => {
			interfaceInfoService.selectCount(interfaceInfoModel, (r) => {
				callback(resultUtil.success({
					list: res.list,
					total: r
				}, '获取成功'))
			}, () => {
				callback(resultUtil.success({
					list: res.list,
					total: 0
				}, '获取成功'))
			})
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = InterfaceInfo
