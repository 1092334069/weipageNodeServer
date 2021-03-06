const sqlConnect = require('../datebase/sqlConnect')
const modelUtil = require('../libs/modelUtil')
const serviceUtil = require('../libs/serviceUtil')

class LoginInfoService {
	constructor() {
		this.tableName = 'login_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(userId,phone,token,updateTime) values(?,?,?,?)`
		const param = modelUtil.modelToArray(model, 'userId,phone,token,updateTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set token = ?,updateTime = ? where phone = ?`
		const param = modelUtil.modelToArray(model, 'token,updateTime,phone')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	selectByPhone(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where phone = ?`
		const param = modelUtil.modelToArray(model, 'phone')
		sqlConnect.connect(sql, param, (res) => {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
	selectByUserId(model, callback, errorCallback){
		const sql = `select * from ${this.tableName} where userId = ?`
		const param = modelUtil.modelToArray(model, 'userId')
		sqlConnect.connect(sql, param, (res) => {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
}

module.exports = LoginInfoService