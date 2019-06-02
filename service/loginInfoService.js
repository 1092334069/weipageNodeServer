const sqlConnect = require('../datebase/sqlConnect.js')
const modelUtil = require('../libs/modelUtil.js')
const serviceUtil = require('../libs/serviceUtil.js')

class PhoneCodeService {
	constructor() {
		this.tableName = 'login_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(phone,uid,token,updateTime) values(?,?,?,?)`
		const param = modelUtil.modelToArray(model, 'phone,uid,token,updateTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	updateTokenByPhone(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set token = ?,updateTime = ? where phone = ?`
		const param = modelUtil.modelToArray(model, 'token,updateTime,phone')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	updateTokenByUid(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set token = ?,updateTime = ? where uid = ?`
		const param = modelUtil.modelToArray(model, 'token,updateTime,uid')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	selectByPhone(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where phone = ?`
		const param = modelUtil.modelToArray(model, 'phone')
		sqlConnect.connect(sql, param, function(res) {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
	selectByUid(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where uid = ?`
		const param = modelUtil.modelToArray(model, 'uid')
		sqlConnect.connect(sql, param, function(res) {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
}

module.exports = PhoneCodeService