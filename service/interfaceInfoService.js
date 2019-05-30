const sqlConnect = require('../datebase/sqlConnect.js')
const parseModel = require('../libs/parseModel.js')

class InterfaceInfoService {
	constructor() {
		this.tableName = 'interface_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(id,name,type,url,param,dataType,callbackParam,userId,createTime) values(0,?,?,?,?,?,?,?,?)`
		const param = parseModel.modelToArray(model, 'name,type,url,param,dataType,callbackParam,userId,createTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update into ${this.tableName} set name = ?,type = ?,url = ?,param = ?,dataType = ?,callbackParam = ?,userId = ? where id = ?`
		const param = parseModel.modelToArray(model, 'name,type,url,param,dataType,callbackParam,userId')
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

module.exports = InterfaceInfoService