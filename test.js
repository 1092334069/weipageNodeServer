const LoginInfo = require('./interface/loginInfo')
const loginInfo = new LoginInfo()

loginInfo.phoneCodeLogin({phone: '18300000005', code: '270257'}, function(res) {
	console.log(res)
})
