const mysql = require('mysql')
const sqlConfig = require('../config/sqlConfig.js')

// var client = mysql.createConnection(sqlConfig)

// client.connect()

// client.query('select * from `phone_code`', {}, function (error, results) {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log(results)
// 	}
// })

// client.end()

// client = mysql.createConnection(sqlConfig)

// client.connect()

// client.query('select * from `phone_password`', {}, function (error, results) {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log(results)
// 	}
// })

// client.end()

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
				console.log(error)
				if (errorCallback) {
					errorCallback()
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