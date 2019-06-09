const WeipageInfo = require('./interface/weipageInfo')
const weipageInfo = new WeipageInfo()

weipageInfo.delete({
	userId: 1,
	weipageId: 2
}, (res) => {
	console.log(res)
})
