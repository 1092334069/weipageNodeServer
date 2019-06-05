const sqlConnect = require('../datebase/sqlConnect')
const modelUtil = require('../libs/modelUtil')

class PhonePasswordService {
	constructor() {
		this.tableName = 'phone_password'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(phone,password,updateTime) values(?,?,?)`
		const param = modelUtil.modelToArray(model, 'phone,password,updateTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set password = ?,updateTime = ? where phone = ?`
		const param = modelUtil.modelToArray(model, 'password,updateTime,phone')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	select(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where phone = ?`
		const param = modelUtil.modelToArray(model, 'phone')
		sqlConnect.connect(sql, param, (res) => {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
}

module.exports = PhonePasswordService