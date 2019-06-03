const userUtil = require('./libs/userUtil')

userUtil.register({
	phone: '18300000001'
}, function(res) {
	console.log(res)
}, function(res) {
	console.log(res)
})
