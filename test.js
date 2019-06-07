const InterfaceInfo = require('./interface/interfaceInfo')
const interfaceInfo = new InterfaceInfo()

interfaceInfo.insert({
	userId: 1,
	type: 'get',
	name: '测试第三个接口',
	url: 'http://zhinengluodiye.com/test/third',
}, (res) => {
	console.log(res)
})
