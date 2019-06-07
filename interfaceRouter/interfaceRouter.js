const InterfaceInfo = require('../interface/interfaceInfo')

const interfaceInfo = new InterfaceInfo()

const router = [{
	pathname: '/api/interface/insert',
	action: interfaceInfo.insert,
	isLogin: true
},{
	pathname: '/api/interface/update',
	action: interfaceInfo.update,
	isLogin: true
}]

module.exports = router