<template>
	<view class="detail">
		<view class="detail-head">
			<u-cell icon="list-dot" :titleStyle="titleStyle" :iconStyle="titleStyle" title="详情"></u-cell>
		</view>
		<view class="detail-main">
			<image style="width: 100%; " src="@/static/det.jpg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle: {
					'font-weight': 600
				},
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		margin-top: 14rpx;
		background-color: #FFF;
		border-radius: 10rpx;
		
		&-main{
			height:max-content;
			width: 100%;
		}
	}
</style>