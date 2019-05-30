const sqlConnect = require('../datebase/sqlConnect.js')
const parseModel = require('../libs/parseModel.js')

class ImageInfoService {
	constructor() {
		this.tableName = 'image_info'
	}
	insert(model, callback, errorCallback) {
		const sql = `insert into ${this.tableName}(id,url,size,userId,createTime) values(0,?,?,?,?)`
		const param = parseModel.modelToArray(model, 'url,size,userId,createTime')
		sqlConnect.connect(sql, param, callback, errorCallback)
	}
	update(model, callback, errorCallback) {
		const sql = `update into ${this.tableName} set url = ?,size = ?,userId = ? where id = ?`
		const param = parseModel.modelToArray(model, 'url,size,userId,id')
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

module.exports = ImageInfoService