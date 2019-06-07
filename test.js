const InterfaceInfo = require('./interface/interfaceInfo')
const interfaceInfo = new InterfaceInfo()

interfaceInfo.insert({
	name: '测试第一个接口',
	url: 'http://zhinengluodiye.com/test/first',
	callbackParam: '[{"key":"code","name":"状态码","type":"number"},{"key":"msg","name":"消息","type":"string"}]'
}, (res) => {
	console.log(res)
})
