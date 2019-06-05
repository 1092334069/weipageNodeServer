const userUtil = require('./libs/userUtil')

userUtil.checkLogin({
	uid: 3,
	token: '155974226912894736'
}, (res) => {
	console.log(res)
}, (res) => {
	console.log(res)
})
