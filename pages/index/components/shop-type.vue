<template>
	<view class="shop-type">
		<view class="shop-type-item" v-for="item in list">
			<image :src="item" class="shop-type-item-img"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'http://file.shopro.top/uploads/20230107/a0814e87c968397cfb595c1f9b62e74a.png',
					'http://file.shopro.top/uploads/20230107/601f0a1ff1485f17c62e98341c364f0f.png',
					'http://file.shopro.top/uploads/20230107/ec5eb640d7f3011bcbd802fbe71429c2.png'
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop-type {
		height: 175px;
		margin-top: 20rpx;
		padding: 0 10rpx;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 10rpx;
		background-color: #f1f1f1;

		&-item {
			width: 100%;
			height: 100%;
			&:first-child {
				grid-row-start: 1;
				grid-row-end: 3;
			}
			&-img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 10rpx;
			}
		}
	}
</style>