const LoginInfo = require('./interface/loginInfo')

const loginInfo = new LoginInfo()

loginInfo.resetToken({
	phone: '13651438085'
}, function(res) {
	console.log(res)
})
