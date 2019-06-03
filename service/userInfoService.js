const sqlConnect = require('../datebase/sqlConnect')
const modelUtil = require('../libs/modelUtil')

class UserInfoService {
	constructor() {
		this.tableName = 'user_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(id,name,phone,grade,isVip,status,remark,createTime) values(0,?,?,?,?,?,?,?)`
		const param = modelUtil.modelToArray(model, 'name,phone,grade,isVip,status,remark,createTime')
		sqlConnect.connect(sql, param, function(res) {
			callback({id: res.insertId})
		}, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set name = ?,phone = ?,grade = ?,isVip = ?,status = ?,remark = ? where id = ?`
		const param = modelUtil.modelToArray(model, 'name,phone,grade,isVip,status,remark,id')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	delete(model, callback, errorCallback) {
		const sql = `delete from ${this.tableName} where id = ?`
		const param = modelUtil.modelToArray(model, 'id')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	select(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where id = ?`
		const param = modelUtil.modelToArray(model, 'id')
		sqlConnect.connect(sql, param, function(res) {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
	selectByPhone(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where phone = ?`
		const param = modelUtil.modelToArray(model, 'phone')
		sqlConnect.connect(sql, param, function(res) {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
}

module.exports = UserInfoService