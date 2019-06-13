const aesUtil = require('./libs/aesUtil')

const uid = 1

const res = aesUtil.encrypt(uid.toString())
console.log(res)

const r = aesUtil.decrypt('0e38bc264f47dcec9edd6b21bb95d8f6')
console.log(parseInt(r))