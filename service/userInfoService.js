const sqlConnect = require('../datebase/sqlConnect.js')
const parseModel = require('../libs/parseModel.js')

class UserInfoService {
	constructor() {
		this.tableName = 'user_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(id,name,phone,grade,isVip,status,remark,createTime) values(0,?,?,?,?,?,?,?)`
		const param = parseModel.modelToArray(model, 'id,name,phone,grade,isVip,status,remark,createTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update into ${this.tableName} set name = ?,phone = ?,grade = ?,isVip = ?,status = ?,remark = ? where id = ?`
		const param = parseModel.modelToArray(model, 'name,phone,grade,isVip,status,remark,id')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	delete(model, callback, errorCallback) {
		const sql = `delete from ${this.tableName} where id = ?`
		const param = parseModel.modelToArray(model, 'id')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	select(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where id = ?`
		const param = parseModel.modelToArray(model, 'id')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
}

module.exports = UserInfoService