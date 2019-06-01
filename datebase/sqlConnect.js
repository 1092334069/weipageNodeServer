const mysql = require('mysql')
const sqlConfig = require('../config/sqlConfig.js')

function mysqlConnect(sqlStr, sqlParam, callback, errorCallback) {
	const client = mysql.createConnection(sqlConfig)
	client.connect()
	if (sqlStr) {
		let param = []
		if (sqlParam) {
			param = sqlParam
		}
		client.query(sqlStr, param, function(error, results) {
			if (error) {
				if (errorCallback) {
					errorCallback(error)
				}
			} else {
				callback(results)
			}
		})
	}
	client.end()
}

module.exports = {
	connect: mysqlConnect
}