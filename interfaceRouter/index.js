const parseResult = require('../libs/parseResult.js')
const loginRouter = require('./loginRouter.js')

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
	callback(parseResult.searchEmpty('没有查找到接口' + pathname))
}

module.exports = {
	interfaceAction
}