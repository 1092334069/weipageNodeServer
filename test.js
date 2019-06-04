const LoginInfo = require('./interface/loginInfo')
const loginInfo = new LoginInfo()

loginInfo.sendPhoneCode({phone: '18300000000'}, function(res) {
	console.log(res)
})
