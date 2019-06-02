const resultUtil = require('../libs/resultUtil')
const loginRouter = require('./loginRouter')

const routerList = []

function jionRouterList(router) {
	for (let i = 0; i < router.length; i++) {
		routerList.push(router[i])
	}
}

jionRouterList(loginRouter)

function interfaceAction(pathname, param, callback) {
	for (let i = 0; i < routerList.length; i ++) {
		if (pathname === routerList[i].pathname) {
			routerList[i].action(param, callback)
			return
		}
	}
	callback(resultUtil.searchEmpty('没有查找到接口' + pathname))
}

module.exports = {
	interfaceAction
}