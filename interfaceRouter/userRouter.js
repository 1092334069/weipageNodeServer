const UserInfo = require('../interface/userInfo')

const userInfo = new UserInfo()

const router = [{
	pathname: '/api/user/detail',
	action: userInfo.detail,
	isLogin: true
}]

module.exports = router
