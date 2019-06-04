const LoginInfo = require('../interface/loginInfo')

const loginInfo = new LoginInfo()

const router = [{
	pathname: '/api/login/phoneCode',
	action: loginInfo.phoneCodeLogin
},{
	pathname: '/api/login/phonePassword',
	action: loginInfo.phonePasswordLogin
},{
	pathname: '/api/login/sendPhoneCode',
	action: loginInfo.sendPhoneCode
}]

module.exports = router
