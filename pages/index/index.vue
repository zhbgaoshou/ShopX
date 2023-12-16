<template>
	<view class="content">
		<!-- 搜索 -->
		<shopSearch></shopSearch>
		<!-- 轮播图 -->
		<shopCarousel></shopCarousel>
		<!-- 金刚区 -->
		<menuTab></menuTab>
		<!-- 分类(金刚区下面的模块) -->
		<shopType></shopType>
		<!-- 推荐 -->
		<shopRecommend></shopRecommend>
		<!-- 占位符 -_- -->
		<view class="null" style="height: 10px;background-color: #f1f1f1;"></view>
	</view>
</template>

<script>
	import shopSearch from './components/shop-search.vue'
	import shopCarousel from './components/shop-carousel.vue'
	import menuTab from './components/menu-tab.vue'
	import shopType from './components/shop-type.vue'
	import shopRecommend from './components/shop-recommend.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			shopCarousel,
			menuTab,
			shopType,
			shopRecommend,
			shopSearch
		},
		onLoad() {
			console.log(this.$api);
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.content{
	height: 100vh;
	background-color: #f1f1f1;
}
</style>
