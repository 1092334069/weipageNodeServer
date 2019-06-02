const LoginInfo = require('../interface/loginInfo.js')

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
}]

module.exports = router