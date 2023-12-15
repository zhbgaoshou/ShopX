<template>
	<view class="content">
		<!-- 轮播图 -->
		<shopCarousel></shopCarousel>
		<!-- 金刚区 -->
		<menuTab></menuTab>
	</view>
</template>

<script>
	import shopCarousel from './components/shop-carousel.vue'
	import menuTab from './components/menu-tab.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			shopCarousel,
			menuTab
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
.content{
	height: 100vh;
	background-color: #f1f1f1;
}
</style>
