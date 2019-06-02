const LoginInfo = require('../interface/loginInfo')

const loginInfo = new LoginInfo()

const router = [{
	pathname: '/api/login/phoneCode',
	action: loginInfo.phoneCodeLogin
},{
	pathname: '/api/login/phonePassword',
	action: loginInfo.phonePasswordLogin
},{
	pathname: '/api/login/resetToken',
	action: loginInfo.resetToken
},{
	pathname: '/api/login/insertToken',
	action: loginInfo.insertToken
}]

module.exports = router