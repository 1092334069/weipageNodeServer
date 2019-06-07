const InterfaceInfo = require('../interface/interfaceInfo')

const interfaceInfo = new InterfaceInfo()

const router = [{
	pathname: '/api/user/detail',
	action: interfaceInfo.insert,
	isLogin: true
}]

module.exports = router