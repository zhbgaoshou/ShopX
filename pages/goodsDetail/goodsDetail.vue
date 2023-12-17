<template>
	<scroll-view class="goods-detail">
		<!-- tabs -->
		<view class="tab" id="tabDOM" :class="{active:showTab}">
			<u-tabs :list="list1" @click="tabClickHandler"></u-tabs>
		</view>
		<!-- 轮播图 -->
		<GoodsCarousel></GoodsCarousel>

		<view style="padding: 20rpx;">
			<!-- info -->
			<GoodsInfo></GoodsInfo>
			<!-- spec -->
			<GoodsSpec></GoodsSpec>
			<!-- 评论 -->
			<GoodsComment id="comment"></GoodsComment>
			<!-- 详情 -->
			<Detail id="detail"></Detail>
		</view>


		<GoodsNav></GoodsNav>
	</scroll-view>
</template>

<script>
	import GoodsCarousel from './components/goods-carousel.vue'
	import GoodsInfo from './components/goods-info.vue'
	import GoodsSpec from './components/goods-spec.vue'
	import GoodsComment from './components/goods-comment.vue'
	import Detail from "./components/Detail.vue"
	import GoodsNav from "./components/goods-nav.vue"


	export default {
		components: {
			GoodsCarousel,
			GoodsInfo,
			GoodsSpec,
			GoodsComment,
			Detail,
			GoodsNav
		},
		data() {
			return {
				goodsInfo: {},
				list1: [{
					name: '商品',
				}, {
					name: '评论',
				}, {
					name: '详情'
				}],

				tabHeight: 0,
				scrollHeight: 0,
				commentTop: 0,
				detailTop: 0

			}
		},
		methods: {
			tabClickHandler(tabObj) {
				const {
					index
				} = tabObj

				if (index === 0) {
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 500
					})
				} else if (index === 1) {
					uni.pageScrollTo({
						scrollTop: this.commentTop - this.tabHeight,
						duration: 200
					})

				} else {
					uni.pageScrollTo({
						scrollTop: this.detailTop - this.tabHeight,
						duration: 200,
						
					})

				}

			},
			setHeight(selector, data) {
				uni.createSelectorQuery().select(selector).boundingClientRect(function(rect) {
					data = rect.top
				}).exec()
			}
		},
		onLoad(opt) {
			const goodsInfo = JSON.parse(opt.goodsInfo)
			this.goodsInfo = goodsInfo
		},
		onReady() {
			const that = this
			
			uni.createSelectorQuery().select('#tabDOM').boundingClientRect(function(rect) {
				that.tabHeight = rect.height
			}).exec()
			
			uni.createSelectorQuery().select('#comment').boundingClientRect(function(rect) {
				that.commentTop = rect.top
			}).exec()
			
			uni.createSelectorQuery().select('#detail').boundingClientRect(function(rect) {
				that.detailTop = rect.top
			}).exec()
		},

		onPageScroll(res) {
			this.scrollHeight = res.scrollTop
		},
		computed: {
			showTab() {
				return this.scrollHeight > this.tabHeight
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-detail {
		background-color: #f1f1f1;
		height: 100%;
	}

	.tab {
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		height: 88rpx;
		background-color: #FFF;
		margin-top: -1px;
		opacity: 0;
		transition: all 0.2s;
	}

	.active {
		opacity: 1;
	}
</style>