const UserInfo = require('./interface/userInfo')
const userInfo = new UserInfo()

userInfo.getUserDetail({
	uid: 1
}, (res) => {
	console.log(res)
})
