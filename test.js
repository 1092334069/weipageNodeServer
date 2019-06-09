const WeipageInfo = require('./interface/weipageInfo')
const weipageInfo = new WeipageInfo()

weipageInfo.insert({
	userId: 1,
	name: '第一个微页面',
	describe: '',
	cover: 'http://img.aisqueezepage.com.com/1.png',
	pageName: 'lottery',
	data: '{"pluginList":[],"requestList":[]}'
}, (res) => {
	console.log(res)
})
