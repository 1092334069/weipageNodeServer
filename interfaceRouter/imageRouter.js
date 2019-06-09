const ImageInfo = require('../interface/imageInfo')

const imageInfo = new ImageInfo()

const router = [{
	pathname: '/api/image/insert',
	action: imageInfo.insert,
	isLogin: true
},{
	pathname: '/api/image/delete',
	action: imageInfo.delete,
	isLogin: true
},{
	pathname: '/api/image/detail',
	action: imageInfo.detail,
	isLogin: true
},{
	pathname: '/api/image/getPageList',
	action: imageInfo.getPageList,
	isLogin: true
}]

module.exports = router
