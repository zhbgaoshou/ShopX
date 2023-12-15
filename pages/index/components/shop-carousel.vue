<template>
	<view class="carousel">
		<u-swiper :list="list3" height='100%' indicator indicatorMode="line" circular></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list3: [
					'https://file.shopro.top/uploads/20230107/35b41f3b20ac46dc48414c9c04de79af.jpg',
					'http://file.shopro.top/uploads/20230107/6b21f96cca4abbdc39a414c201f47ce0.jpg',
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.carousel {
		height: 520rpx;
	}
</style>