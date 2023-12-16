<template>
	<view class="search">
		<view class="">
			<u-search @search="searchHandler" @custom="searchHandler" :focus="true" placeholder="请输入关键字"
				v-model="keyword" :showAction="true" actionText="搜索" :animation="true"></u-search>
		</view>
		<view class="search-text">
			<h4 class="search-text-first">搜索历史</h4>
			<text class="search-text-last" @click="clearHistory">清空历史记录</text>
		</view>
		<view class="search-history" @click="searchHandler">
			<view v-for="history in historyList" class="search-history-tag" :data-history='history'>{{history}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList: uni.getStorageSync('historyList') || [],
				keyword: ''
			}
		},
		watch: {
			historyList(newValue) {
				uni.setStorageSync('historyList', newValue)
			}
		},
		methods: {
			goSearchDetail() {
				uni.navigateTo({
					url: `/pages/searchDetail/searchDetail?keyword=${this.keyword}`
				})
			},
			searchHandler(evt) {
				try {
					const history = evt.target.dataset.history
					
					this.keyword = history
				} catch (e) {
					
				} finally {
					if (this.keyword === '') return
					this.goSearchDetail()


					let index = this.historyList.indexOf(this.keyword)
					if (index === -1) {
						this.historyList.unshift(this.keyword)
					} else {
						this.historyList.splice(index, 1)
						this.historyList.unshift(this.keyword)
					}

					this.keyword = ''
				}

			},
			clearHistory() {
				const that = this
				if (that.historyList.length === 0) {
					uni.showToast({
						title: '历史记录为空',
						duration: 1000
					});
					return
				}
				uni.showModal({
					title: '清空历史记录',
					content: '清空后无法恢复，确定吗?',
					success: function(res) {
						if (res.confirm) {
							console.log(that);
							that.historyList = []
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		padding: 20rpx;

		&-history {
			margin-top: 24rpx;
			display: flex;
			flex-wrap: wrap;

			&-tag {
				margin: 10rpx;
				height: 64rpx;
				width: max-content;
				padding: 0 40rpx;
				background-color: #f5f6f7;
				border-radius: 15px;
				width: max-content;
				font-size: 28rpx;
				@include box-center();
			}
		}

		&-text {
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;

			&-first {
				color: #333;
				font-size: 30rpx;
				font-weight: 600;
			}

			&-last {
				color: #999;
				font-size: 28rpx;
			}
		}
	}
</style>