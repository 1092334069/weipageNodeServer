const sqlConnect = require('../datebase/sqlConnect.js')
const parseModel = require('../libs/parseModel.js')

class PhonePasswordService {
	constructor() {
		this.tableName = 'phone_password'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(phone,password,updateTime) values(?,?,?)`
		const param = parseModel.modelToArray(model, 'phone,password,updateTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update into ${this.tableName} set password = ?,updateTime = ? where phone = ?`
		const param = parseModel.modelToArray(model, 'password,updateTime,phone')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	delete(model, callback, errorCallback) {
		const sql = `delete from ${this.tableName} where phone = ?`
		const param = parseModel.modelToArray(model, 'phone')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	select(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where phone = ?`
		const param = parseModel.modelToArray(model, 'phone')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
}

module.exports = PhonePasswordService