const WeipageInfoService = require('../service/weipageInfoService')
const WeipageInfoModel = require('../model/weipageInfoModel')

const resultUtil = require('../libs/resultUtil')

class WeipageInfo {
	/*
	*	新增微页面
	*	param {
	*		name 			微页面名称
	*		describe		微页面描述
	*		cover			微页面封面
	*		pageName 		页面英文名（导出页面的目录名称）
	*		data			页面数据格式
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
			callback(resultUtil.unLogin('缺少微页面名称'))
			return
		}
		if (!param.cover) {
			callback(resultUtil.unLogin('缺少微页面封面'))
			return
		}
		if (!param.pageName) {
			callback(resultUtil.unLogin('缺少页面英文名'))
			return
		}
		if (!param.data) {
			callback(resultUtil.unLogin('缺少页面数据格式'))
			return
		}

		const weipageInfoService = new WeipageInfoService()
		const weipageInfoModel = new WeipageInfoModel()
		weipageInfoModel.setName(param.name)
		weipageInfoModel.setDescribe(param.describe || '')
		weipageInfoModel.setCover(param.cover)
		weipageInfoModel.setPageName(param.pageName)
		weipageInfoModel.setData(param.data)
		weipageInfoModel.setUserId(param.userId)

		weipageInfoService.insert(weipageInfoModel, (res) => {
			callback(resultUtil.success({
				weipageId: res.id
			}, '创建成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	编辑微页面
	*	param {
	*		weipageId 		微页面id
	*		name 			微页面名称
	*		describe		微页面描述
	*		cover			微页面封面
	*		pageName 		页面英文名（导出页面的目录名称）
	*		data			页面数据格式
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
		if (!param.weipageId) {
			callback(resultUtil.unLogin('缺少微页面id'))
			return
		}
		if (!param.name) {
			callback(resultUtil.unLogin('缺少微页面名称'))
			return
		}
		if (!param.cover) {
			callback(resultUtil.unLogin('缺少微页面封面'))
			return
		}
		if (!param.pageName) {
			callback(resultUtil.unLogin('缺少页面英文名'))
			return
		}
		if (!param.data) {
			callback(resultUtil.unLogin('缺少页面数据格式'))
			return
		}

		const weipageInfoService = new WeipageInfoService()
		const weipageInfoModel = new WeipageInfoModel()
		weipageInfoModel.setId(param.weipageId)
		weipageInfoModel.setName(param.name)
		weipageInfoModel.setDescribe(param.describe || '')
		weipageInfoModel.setCover(param.cover)
		weipageInfoModel.setPageName(param.pageName)
		weipageInfoModel.setData(param.data)
		weipageInfoModel.setUserId(param.userId)

		weipageInfoService.update(weipageInfoModel, (res) => {
			callback(resultUtil.success(res, '修改成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	编辑微页面
	*	param {
	*		weipageId 		微页面id
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
		if (!param.weipageId) {
			callback(resultUtil.unLogin('缺少微页面id'))
			return
		}

		const weipageInfoService = new WeipageInfoService()
		const weipageInfoModel = new WeipageInfoModel()
		weipageInfoModel.setId(param.weipageId)
		weipageInfoModel.setUserId(param.userId)

		weipageInfoService.delete(weipageInfoModel, (res) => {
			callback(resultUtil.success(res, '删除成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	微页面详情
	*	param {
	*		weipageId 		微页面id
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
		if (!param.weipageId) {
			callback(resultUtil.unLogin('缺少微页面id'))
			return
		}

		const weipageInfoService = new WeipageInfoService()
		const weipageInfoModel = new WeipageInfoModel()
		weipageInfoModel.setId(param.weipageId)
		weipageInfoModel.setUserId(param.userId)

		weipageInfoService.select(weipageInfoModel, (res) => {
			if (res) {
				callback(resultUtil.success({
					weipageId: res.id,
					name: res.name,
					describe: res.describe,
					cover: res.cover,
					pageName: res.pageName,
					data: res.data
				}))
			} else {
				callback(resultUtil.searchEmpty('未找到该微页面'))
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

		const weipageInfoService = new WeipageInfoService()
		const weipageInfoModel = new WeipageInfoModel()
		weipageInfoModel.setUserId(param.userId)

		weipageInfoService.selectPageList({
			model: weipageInfoModel,
			page: param.page,
			size: param.size
		}, (res) => {
			callback(resultUtil.success(res, '获取成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = WeipageInfo
