class UserInfoModel {
	constructor() {
		this.id = 0
		this.name = ''
		this.phone = ''
		this.grade = 0
		this.isVip = 0
		this.status = 0
		this.remark = ''
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
	getPhone() {
		return this.phone
	}
	setPhone(phone) {
		this.phone = phone
	}
	getGrade(){
		return this.grade
	}
	setGrade(grade) {
		this.grade = parseInt(grade)
	}
	getIsVip() {
		return this.isVip
	}
	setIsVip(isVip) {
		this.isVip = parseInt(isVip)
	}
	getStatus() {
		return this.status
	}
	setStatus(status) {
		this.status = parseInt(status)
	}
	getRemark() {
		return this.remark
	}
	setRemark(remark) {
		this.remark = remark
	}
	getCreateTime() {
		return this.createTime
	}
	setCreateTime(createTime) {
		this.createTime = new Date(createTime)
	}
}

module.exports = UserInfoModel
