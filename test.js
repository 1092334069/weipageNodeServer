const LoginInfo = require('./interface/loginInfo')
const loginInfo = new LoginInfo()

loginInfo.phoneCodeLogin({phone: '18300000000', code: '820368'}, function(res) {
	console.log(res)
})
