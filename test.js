const InterfaceInfo = require('./interface/interfaceInfo')
const interfaceInfo = new InterfaceInfo()

interfaceInfo.insert({
	userId: 1,
	type: 'post',
	name: '测试第二个接口',
	url: 'http://zhinengluodiye.com/test/first',
	param: '[{"key":"phone","name":"手机号码","type":"number"}]'
}, (res) => {
	console.log(res)
})
