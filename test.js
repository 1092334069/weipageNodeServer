const WeipageInfo = require('./interface/weipageInfo')
const weipageInfo = new WeipageInfo()

weipageInfo.update({
	userId: 1,
	weipageId: 2,
	name: '第二个微页面',
	describes: '描述2',
	cover: 'http://img.aisqueezepage.com.com/2.png',
	pageName: 'activity',
	data: '{"pluginList":[],"requestList":[]}'
}, (res) => {
	console.log(res)
})
