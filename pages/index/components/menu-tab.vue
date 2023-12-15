<template>
	<view class="menu-tab">
		<view class="menu-tab-item" v-for="tabItem in list">
			<u--image :showLoading="true" :src="tabItem.image" width="50px" height="50px" @click="click"></u--image>
			<text class="menu-tab-item-text">{{tabItem.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: '签到有礼',
						image: 'http://file.shopro.top/uploads/20210518/884360099a48d435e23e24091fb7084f.png'
					}, {
						title: '签到有礼',
						image: 'http://file.shopro.top/uploads/20210518/884360099a48d435e23e24091fb7084f.png'
					}, {
						title: '签到有礼',
						image: 'http://file.shopro.top/uploads/20210518/884360099a48d435e23e24091fb7084f.png'
					}, {
						title: '签到有礼',
						image: 'http://file.shopro.top/uploads/20210518/884360099a48d435e23e24091fb7084f.png'
					}, {
						title: '签到有礼',
						image: 'http://file.shopro.top/uploads/20210518/884360099a48d435e23e24091fb7084f.png'
					}, {
						title: '签到有礼',
						image: 'http://file.shopro.top/uploads/20210518/884360099a48d435e23e24091fb7084f.png'
					}, {
						title: '签到有礼',
						image: 'http://file.shopro.top/uploads/20210518/884360099a48d435e23e24091fb7084f.png'
					}, {
						title: '签到有礼',
						image: 'http://file.shopro.top/uploads/20210518/884360099a48d435e23e24091fb7084f.png'
					},

				]
			}
		}
	}
</script>

<style lang="scss">
	.menu-tab {
		// height: 100rpx;
		margin-top: 20rpx;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 5rpx;
		background-color: #fff;

		&-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 20rpx 0;
			
			&-text{
				font-size: 26rpx;
				padding-top: 8rpx;
			}
		}
	}
</style>