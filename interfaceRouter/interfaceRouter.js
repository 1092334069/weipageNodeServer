const InterfaceInfo = require('../interface/interfaceInfo')

const interfaceInfo = new InterfaceInfo()

const router = [{
	pathname: '/api/interface/insert',
	action: interfaceInfo.insert,
	isLogin: true
}]

module.exports = router