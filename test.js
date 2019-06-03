const userUtil = require('./libs/userUtil')

userUtil.register({
	phone: '18300000003'
}, function(res) {
	console.log(res)
}, function(res) {
	console.log(res)
})
