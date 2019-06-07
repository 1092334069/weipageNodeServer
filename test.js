const InterfaceInfo = require('./interface/interfaceInfo')
const interfaceInfo = new InterfaceInfo()

interfaceInfo.update({
	userId: 2,
	interfaceId: 3,
	type: 'get',
	name: '接口3',
	url: 'http://zhinengluodiye.com/test/third',
}, (res) => {
	console.log(res)
})
