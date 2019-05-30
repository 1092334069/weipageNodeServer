class ImageInfoModel {
	constructor() {
		this.id = 0
		this.url = ''
		this.size = 0
		this.userId = 0
		this.createTime = new Date()
	}
	getId() {
		return this.id
	}
	setId(id) {
		this.id = parseInt(id)
	}
	getUrl() {
		return this.url
	}
	setUrl(url) {
		this.url = url
	}
	getSize() {
		return this.size
	}
	setSize(size) {
		this.size = parseInt(size)
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

module.exports = ImageInfoModel
