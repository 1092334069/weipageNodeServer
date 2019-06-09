const ImageInfoService = require('../service/imageInfoService')
const ImageInfoModel = require('../model/imageInfoModel')

const resultUtil = require('../libs/resultUtil')

class ImageInfo {
	/*
	*	新增图片资源
	*	param {
	*		url 	连接地址
	*		size 	尺寸
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
		if (!param.url) {
			callback(resultUtil.unLogin('缺少连接地址'))
			return
		}
		if (!param.size) {
			callback(resultUtil.unLogin('缺少尺寸'))
			return
		}

		const imageInfoService = new ImageInfoService()
		const imageInfoModel = new ImageInfoModel()
		imageInfoModel.setUrl(param.url)
		imageInfoModel.setSize(param.size)
		imageInfoModel.setUserId(param.userId)

		imageInfoService.insert(imageInfoModel, (res) => {
			callback(resultUtil.success({
				imageId: res.id
			}, '创建成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	删除图片资源
	*	param {
	*		imageId 	图片id
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
		if (!param.imageId) {
			callback(resultUtil.missParam('缺少图片id'))
			return
		}

		const imageInfoService = new ImageInfoService()
		const imageInfoModel = new ImageInfoModel()
		imageInfoModel.setId(param.imageId)
		imageInfoModel.setUserId(param.userId)

		imageInfoService.delete(imageInfoModel, (res) => {
			callback(resultUtil.success(res, '删除成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
	/*
	*	图片详情
	*	param {
	*		imageId 	图片id
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
		if (!param.imageId) {
			callback(resultUtil.missParam('缺少图片id'))
			return
		}

		const imageInfoService = new ImageInfoService()
		const imageInfoModel = new ImageInfoModel()
		imageInfoModel.setId(param.imageId)
		imageInfoModel.setUserId(param.userId)

		imageInfoService.select(imageInfoModel, (res) => {
			if (res) {
				callback(resultUtil.success({
					imageId: res.id,
					url: res.url,
					size: res.size,
					createTime: res.createTime
				}, '获取成功'))
			} else {
				callback(resultUtil.searchEmpty('未找到该图片'))
			}
		})
	}
	/*
	*	图片分页列表
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
		
		const imageInfoService = new ImageInfoService()
		const imageInfoModel = new ImageInfoModel()
		imageInfoModel.setUserId(param.userId)

		imageInfoService.selectPageList({
			model: imageInfoModel,
			page: param.page,
			size: param.size
		}, (res) => {
			callback(resultUtil.success(res, '获取成功'))
		}, () => {
			callback(resultUtil.sqlException())
		})
	}
}

module.exports = ImageInfo
