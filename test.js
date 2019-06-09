const ImageInfo = require('./interface/imageInfo')
const imageInfo = new ImageInfo()

// imageInfo.detail({
// 	userId: 1,
// 	imageId: 2
// }, (res) => {
// 	console.log(res)
// })
getPageList.getPageList({
	userId: 1,
	page: 1,
	size: 2
}, (res) => {
	console.log(res)
})
