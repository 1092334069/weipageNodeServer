1，微页面的接口代码
2，config文件不对外公布，如有需要请自己建文件，配上自己的数据库连接参数
	sqlConfig.js
		const mySqlConfig = {
			host: 'localhost',
			port: 3306,
		 	user: 'root',
		 	password: '',
		 	database: ''
		}
		module.exports = mySqlConfig
3，运行前先 npm install
4，通过 node server.js 启动工程