const sqlConnect = require('../datebase/sqlConnect')
const modelUtil = require('../libs/modelUtil')
const serviceUtil = require('../libs/serviceUtil')

class InterfaceInfoService {
	constructor() {
		this.tableName = 'interface_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(id,name,type,url,param,dataType,callbackParam,userId,createTime) values(0,?,?,?,?,?,?,?,?)`
		const param = modelUtil.modelToArray(model, 'name,type,url,param,dataType,callbackParam,userId,createTime')
		sqlConnect.connect(sql, param, (res) => {
			if (res && res.insertId) {
				callback({id: res.insertId})
			} else {
				errorCallback()
			}
		}, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set name = ?,type = ?,url = ?,param = ?,dataType = ?,callbackParam = ? where (id = ? and userId = ?)`
		const param = modelUtil.modelToArray(model, 'name,type,url,param,dataType,callbackParam,id,userId')
		sqlConnect.connect(sql, param, (res) => {
			if (res && res.affectedRows) {
				callback()
			} else {
				errorCallback()
			}
		}, errorCallback)
	}
	delete(model, callback, errorCallback) {
		const sql = `delete from ${this.tableName} where (id = ? and userId = ?)`
		const param = modelUtil.modelToArray(model, 'id,userId')
		sqlConnect.connect(sql, param, (res) => {
			if (res && res.affectedRows) {
				callback()
			} else {
				errorCallback()
			}
		}, errorCallback)
	}
	select(model, callback, errorCallback) {
		const sql = `select * from ${this.tableName} where (id = ? and userId = ?)`
		const param = modelUtil.modelToArray(model, 'id,userId')
		sqlConnect.connect(sql, param, (res) => {
			serviceUtil.selectOneCallback(res, callback)
		}, errorCallback)
	}
	selectPageList(parameter, callback, errorCallback) {
		const limit = serviceUtil.parseLimit(parameter)
		if (!limit || !parameter.model) {
			errorCallback()
			return
		}
		const sql = `select id,name,url,createTime from ${this.tableName} where userId = ? order by id desc ${limit}`
		const param = modelUtil.modelToArray(parameter.model, 'userId')
		sqlConnect.connect(sql, param, (res) => {
			serviceUtil.selectListCallback(res, callback)
		}, errorCallback)
	}
	selectCount(model, callback, errorCallback) {
		const sql = `select count(id) from ${this.tableName} where userId = ?`
		const param = modelUtil.modelToArray(model, 'userId')
		sqlConnect.connect(sql, param, (res) => {
			serviceUtil.selectCountCallback(res, 'count(id)', callback)
		}, errorCallback)
	}
}

module.exports = InterfaceInfoService
