const LoginInfo = require('./interface/loginInfo')

const loginInfo = new LoginInfo()

loginInfo.phoneCodeLogin({
	phone: '13651438085',
	code: '1234'
}, function(res) {
	console.log(res)
})
