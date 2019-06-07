const InterfaceInfo = require('./interface/interfaceInfo')
const interfaceInfo = new InterfaceInfo()

interfaceInfo.getPageList({
	userId: 2,
	page: 2,
	size: 3
}, (res) => {
	console.log(res)
})
