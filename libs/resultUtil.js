function success(res) {
	return {
		code: 200,
		data: res
	}
}

function conditionError(res) {
	return {
		code: 300,
		message: res
	}
}

function searchEmpty(res) {
	return {
		code: 400,
		message: res
	}
}

function sqlException() {
	return {
		code: 500,
		message: '网络异常，请稍后重试'
	}
}

function missParam(res) {
	return {
		code: 600,
		message: res
	}
}

module.exports = {
	success,
	conditionError,
	searchEmpty,
	sqlException,
	missParam
}