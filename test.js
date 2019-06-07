const LoginInfo = require('./interface/loginInfo')
const loginInfo = new LoginInfo()

loginInfo.phonePasswordLogin({
	phone: '13651438085',
	password: '123456'
}, (res) => {
	console.log(res)
})
