const sqlConnect = require('../datebase/sqlConnect.js')
const modelUtil = require('../libs/modelUtil.js')

class WeipageInfoService {
	constructor() {
		this.tableName = 'weipage_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(id,name,describe,cover,pageName,data,userId,createTime) values(0,?,?,?,?,?,?,?)`
		const param = modelUtil.modelToArray(model, 'id,name,describe,cover,pageName,data,userId,createTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set name = ?,describe = ?,cover = ?,pageName = ?,data = ?,userId = ? where id = ?`
		const param = modelUtil.modelToArray(model, 'name,describe,cover,pageName,data,userId,id')
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
}

module.exports = WeipageInfoService