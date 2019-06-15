const PhoneInfo = require('../interface/phoneInfo')

const phoneInfo = new PhoneInfo()

const router = [{
	pathname: '/api/phone/sendPhoneCode',
	action: phoneInfo.sendPhoneCode
}]

module.exports = router