const LoginInfo = require('../interface/loginInfo.js')

const loginInfo = new LoginInfo()

const router = [{
	pathname: '/api/login/phoneCode',
	action: loginInfo.phoneCodeLogin
},{
	pathname: '/api/login/phonePassword',
	action: loginInfo.phonePasswordLogin
}]

module.exports = router