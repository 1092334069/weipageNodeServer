const resultUtil = require('../libs/resultUtil')
const userUtil = require('../libs/userUtil')

const routerList = []
function jionRouterList(router) {
	for (let i = 0; i < router.length; i++) {
		routerList.push(router[i])
	}
}

// 路由相应
function interfaceAction(pathname, param, callback) {
	for (let i = 0; i < routerList.length; i ++) {
		if (pathname === routerList[i].pathname) {
			if (routerList[i].isLogin) {
				userUtil.checkLogin(param, () => {
					routerList[i].action(param, callback)
				}, callback)
			} else {
				routerList[i].action(param, callback)
			}
			return
		}
	}
	callback(resultUtil.searchEmpty('没有查找到接口' + pathname))
}

// 注册路由表
const loginRouter = require('./loginRouter')
const userRouter = require('./userRouter')
const interfaceRouter = require('./interfaceRouter')
const weipageRouter = require('./weipageRouter')
jionRouterList(loginRouter)
jionRouterList(userRouter)
jionRouterList(interfaceRouter)
jionRouterList(weipageRouter)

module.exports = {
	interfaceAction
}