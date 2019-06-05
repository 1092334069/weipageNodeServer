const mysql = require('mysql')
const sqlConfig = require('../config/sqlConfig')

function mysqlConnect(sqlStr, sqlParam, callback, errorCallback) {
	const client = mysql.createConnection(sqlConfig)
	client.connect()
	if (sqlStr) {
		let param = []
		if (sqlParam) {
			param = sqlParam
		}
		client.query(sqlStr, param, (error, results) => {
			if (error) {
				console.log(error)
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