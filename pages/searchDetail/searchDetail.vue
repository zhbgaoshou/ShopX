<template>
	<view style="background-color: #f1f1f1;height: 100vh;">
		<u-navbar leftText="返回" :safeAreaInsetTop="false">
			<view slot="left" class="nav-slot-left">
				<u-icon @click="go" name="arrow-left" size="19"></u-icon>
				<u-line direction="column" :hairline="false" length="16" margin="0 8px"></u-line>
				<u-icon @click="goIndex" name="home" size="20"></u-icon>
			</view>

			<view slot="right">
				<u-search placeholder="请输入关键字" v-model="searchVal"></u-search>
			</view>
		</u-navbar>

		<view class="tabs">
			<u-sticky bgColor="#fff">
				<van-dropdown-menu>
					<van-dropdown-item :value="value1" :options="option1" />
					<van-dropdown-item :value="value2" :options="option2" />
				</van-dropdown-menu>
			</u-sticky>
		</view>
		
		<view class="detail-main">
			<goods-card :goodsInfo='goods' v-for="goods in goodsInfoList"></goods-card>
		</view>


	</view>
</template>

<script>
	import goodsCard from '@/components/goods-card.vue'
	export default {
		components:{
			goodsCard
		},
		data() {
			return {
				searchVal: '',
				orderList: [{
					name: '综合排序',
				}, {
					name: '销量',
				}, {
					name: '价格'
				}],
				option1: [{
						text: '全部商品',
						value: 0
					},
					{
						text: '新款商品',
						value: 1
					},
					{
						text: '活动商品',
						value: 2
					},
				],
				option2: [{
						text: '默认排序',
						value: 'a'
					},
					{
						text: '好评排序',
						value: 'b'
					},
					{
						text: '销量排序',
						value: 'c'
					},
				],
				value1: 0,
				value2: 'a',
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
		methods: {
			go(){
				uni.navigateBack({
					delta: 1
				})
			},
			goIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		},
		onLoad(opt) {
			const {
				keyword
			} = opt
			this.searchVal = keyword
		}
	}
</script>

<style scoped lang="scss">
	.nav-slot-left {
		display: flex;
		padding: 10rpx;
		border: 1px solid #dcdcdc;
		border-radius: 40px;
	}

	.tabs {
		margin-top: 80rpx;
		border-bottom: 1px solid #f6f7f8;
	}
	
	.detail-main{
		margin-top: 10rpx;
		padding: 0 10rpx;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 18rpx;
		grid-auto-rows: auto;
	}
</style>