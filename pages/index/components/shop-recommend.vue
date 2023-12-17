<template>
	<view class="recommend">
		<!-- 头部 -->
		<view class="recommend-title">
			<image class="recommend-title-img" src="../../../static/index/images/title2.png" mode="aspectFit"
				:draggable='false'></image>
			<h4 class="recommend-title-text">为你推荐</h4>
		</view>
		<!-- 推荐商品卡片 -->
		<view class="recommend-goods">
			<goods-card @goDetail="goDetailHandler" :goodsInfo='goods' v-for="goods in goodsInfoList"></goods-card>
		</view>
	</view>
</template>

<script>
	import goodsCard from '@/components/goods-card.vue'
	export default {
		data() {
			return {
				goodsInfoList: [{
					goodsId: 1,
					image:'http://file.shopro.top/uploads/20210519/05539467b81f165abd4cf08c22acb13b.jpeg',
					title:`乔丹运动鞋男鞋2020春夏季新款轻便耐磨气垫透气跑步鞋男`,
					description:`乔丹正品 专业跑步鞋`,
					isDiscount:true,
					price:1800,
					discountPrice:1200
				},
				{
					goodsId: 1,
					image:'http://file.shopro.top/uploads/20210519/05539467b81f165abd4cf08c22acb13b.jpeg',
					title:`乔丹运动鞋男鞋2020春夏季新款轻便耐磨气垫透气跑步鞋男`,
					description:`乔丹正品 专业跑步鞋`,
					isDiscount:true,
					price:800,
					discountPrice:200
				}]
			}
		},
		components: {
			goodsCard
		},
		methods:{
			goDetailHandler(goodsInfo){
				uni.navigateTo({
					url:`/pages/goodsDetail/goodsDetail?goodsInfo=${JSON.stringify(goodsInfo)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.recommend {
		background-color: #f1f1f1;
		padding: 0 20rpx;
		&-title {
			position: relative;

			&-img {
				height: 88rpx;
				width: 100%;
			}

			&-text {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}

		}

		&-goods {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 18rpx;
			grid-auto-rows: auto;
		}
	}
</style>