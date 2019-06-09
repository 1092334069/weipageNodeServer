const ImageInfo = require('./interface/imageInfo')
const imageInfo = new ImageInfo()

imageInfo.insert({
	userId: 1,
	url: 'http://img.http://aisqueezepage.com/1.png',
	size: 100
}, (res) => {
	console.log(res)
})
