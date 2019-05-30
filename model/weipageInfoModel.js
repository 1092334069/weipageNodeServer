class WeipageInfoModel {
	constructor() {
		this.id = 0
		this.name = ''
		this.describe = ''
		this.cover = ''
		this.pageName = ''
		this.data = ''
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
	getDescribe() {
		return this.describe
	}
	setDescribe(describe) {
		this.describe = describe
	}
	getCover() {
		return this.cover
	}
	setCover(cover) {
		this.cover = cover
	}
	getPageName() {
		return this.pageName
	}
	setPageName(pageName) {
		this.pageName = pageName
	}
	getData() {
		return this.data
	}
	setData(data) {
		this.data = data
	}
	getUserId() {
		return this.userId
	}
	setUserId(userId) {
		this.userId = parseInt(userId)
	}
	getCreateTime() {
		return this.createTime
	}
	setCreateTime(createTime) {
		this.createTime = new Date(createTime)
	}
}

module.exports = WeipageInfoModel
