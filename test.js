const WeipageInfo = require('./interface/weipageInfo')
const weipageInfo = new WeipageInfo()

weipageInfo.insert({
	userId: 1,
	name: '第二个微页面',
	describes: '描述',
	cover: 'http://img.aisqueezepage.com.com/2.png',
	pageName: 'activity',
	data: '{"pluginList":[],"requestList":[]}'
}, (res) => {
	console.log(res)
})
