const sqlConnect = require('../datebase/sqlConnect')
const modelUtil = require('../libs/modelUtil')
const serviceUtil = require('../libs/serviceUtil')

class PhoneCodeService {
	constructor() {
		this.tableName = 'phone_code'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(phone,code,updateTime) values(?,?,?)`
		const param = modelUtil.modelToArray(model, 'phone,code,updateTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set code = ?,updateTime = ? where phone = ?`
		const param = modelUtil.modelToArray(model, 'code,updateTime,phone')
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

module.exports = PhoneCodeService