const WeipageInfo = require('../interface/weipageInfo')

const weipageInfo = new WeipageInfo()

const router = [{
	pathname: '/api/weipage/insert',
	action: weipageInfo.insert,
	isLogin: true
},{
	pathname: '/api/weipage/update',
	action: weipageInfo.update,
	isLogin: true
},{
	pathname: '/api/weipage/delete',
	action: weipageInfo.delete,
	isLogin: true
},{
	pathname: '/api/weipage/detail',
	action: weipageInfo.detail,
	isLogin: true
},{
	pathname: '/api/weipage/getPageList',
	action: weipageInfo.getPageList,
	isLogin: true
}]

module.exports = router
