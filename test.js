const userUtil = require('./libs/userUtil')

userUtil.register({
	phone: '18300000000'
}, function(res) {
	console.log(res)
}, function(res) {
	console.log(res)
})
