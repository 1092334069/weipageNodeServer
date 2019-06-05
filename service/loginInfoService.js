const sqlConnect = require('../datebase/sqlConnect')
const modelUtil = require('../libs/modelUtil')
const serviceUtil = require('../libs/serviceUtil')

class PhoneCodeService {
	constructor() {
		this.tableName = 'login_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(uid,phone,token,updateTime) values(?,?,?,?)`
		const param = modelUtil.modelToArray(model, 'uid,phone,token,updateTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set token = ?,updateTime = ? where phone = ?`
		const param = modelUtil.modelToArray(model, 'token,updateTime,phone')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	select(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where phone = ?`
		const param = modelUtil.modelToArray(model, 'phone')
		sqlConnect.connect(sql, param, function(res) {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
	selectByUid(){
		const sql = `select * from ${this.tableName} where uid = ?`
		const param = modelUtil.modelToArray(model, 'uid')
		sqlConnect.connect(sql, param, function(res) {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
}

module.exports = PhoneCodeService