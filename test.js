const ImageInfo = require('./interface/imageInfo')
const imageInfo = new ImageInfo()

imageInfo.detail({
	userId: 1,
	imageId: 2
}, (res) => {
	console.log(res)
})
