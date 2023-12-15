export default {
	common: {
		baseUrl: "http://112.74.75.211:8000/api",
		data: {

		},
		header: {
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		method: "GET",
		dataType: "json"
	},
	request(options = {}) {
		uni.showLoading({
			title: "加载中"
		})
		options.url = this.common.baseUrl + options.url
		options.data = options.data || this.common.data
		options.header = options.header || this.common.header
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		return new Promise((resolve, reject) => {
			uni.request({
				...options,
				success: (res) => {
					if (res.statusCode > 400) {
						uni.showLoading({
							title: "请求失败"
						})
						setTimeout(() => {
							uni.hideLoading()
						}, 1000)
						return reject(res)
					}
					resolve(res.data.data)
					setTimeout(() => {
						uni.hideLoading()
					}, 1000)
				},
				fail: (err) => {
					console.log(err)
				}
			})
		})
	}
}