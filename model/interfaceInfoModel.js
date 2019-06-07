class InterfaceInfoModel {
	constructor() {
		this id = 0
		this.name = ''
		this.type = ''
		this.url = ''
		this.param = ''
		this.dataType = '',
		this.callbackParam = ''
		this.userId = 0
		this.createTime = new Date()
	}
	getId() {
		return this.id
	}
	setId(id) {
		this.id = parseInt(id)
	}
	getName() {
		return this.name
	}
	setName(name) {
		this.name = name
	}
	getType() {
		return this.type
	}
	setType(type) {
		this.type = type
	}
	getUrl() {
		return this.url
	}
	setUrl(url) {
		this.url = url
	}
	getParam() {
		return this.param
	}
	setParam(param) {
		this.param = param
	}
	getDataType() {
		return this.dataType
	}
	setDataType(dataType) {
		this.dataType = dataType
	}
	getCallbackParam() {
		return this.callbackParam
	}
	setCallbackParam(callbackParam) {
		this.callbackParam = callbackParam
	}
	getUserId() {
		return this.userId
	}
	setUserId(userId) {
		this.userId = parseInt(userId)
	}
	getCreateTime(){
		return this.createTime
	}
	setCreateTime(createTime) {
		this.createTime = new Date(createTime)
	}
}

module.exports = InterfaceInfoModel
