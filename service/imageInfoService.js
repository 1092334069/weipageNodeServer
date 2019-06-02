const sqlConnect = require('../datebase/sqlConnect')
const modelUtil = require('../libs/modelUtil')

class ImageInfoService {
	constructor() {
		this.tableName = 'image_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(id,url,size,userId,createTime) values(0,?,?,?,?)`
		const param = modelUtil.modelToArray(model, 'url,size,userId,createTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update ${this.tableName} set url = ?,size = ?,userId = ? where id = ?`
		const param = modelUtil.modelToArray(model, 'url,size,userId,id')
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

module.exports = ImageInfoService