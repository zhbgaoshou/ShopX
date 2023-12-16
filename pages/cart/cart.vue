<template>
	<view class="cart">
		<!-- 头部 -->
		<view class="head-box">
			<view class="count-box">
				共
				<text class="all-num">{{ cartList.length }}</text>
				件商品
			</view>
			<text class="edit" @tap="isEdit=!isEdit">{{ isEdit ? '取消' : '编辑' }}</text>
		</view>
		<!-- 购物车列表 -->
		<view class="content_box" v-if="cartList.length">
			<view class="cart_item" v-for="(item,index) in cartList" :key="item.id">
				<view class="checkbox">
					<radio :checked="item.isChecked" @click="radioChange(item,index)" />
				</view>
				<view class="product_info">
					<view class="cart_img">
						<image :src="item.imgUrl" mode=""></image>
					</view>

					<view class="info_box">
						<view class="title">
							gdgg钢丝软管色hsstdyshtryhstryjsrd,jy送人头花容失色坚硬如铁
						</view>
						<view>
							<view class="spec">
								{{item.skuName}}
							</view>
							<view class="price_count">
								<text class="price">￥{{item.skuPrice.toFixed(2)}}</text>
								<u-number-box :value="item.skuNum" integer bgColor="transparent"
									@change="valChange($event,item)">
									<view slot="minus" class="minus">
										<u-icon name="minus" color="#FFFFFF" size="12"></u-icon>
									</view>
									<u--input border="none" v-model="item.skuNum"></u--input>
									<view slot="plus" class="plus">
										<u-icon name="plus" color="#FFFFFF" size="12"></u-icon>
									</view>
								</u-number-box>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view style="height: 112rpx;">
				
			</view>
		</view>
		<!-- 缺省页 -->
		<view v-else>
			<u-empty marginTop="60%" icon='https://file.shopro.top/imgs/empty/empty_goods.png' width="260" height="260"
				text="购物车空空如也,快去逛逛吧~">
			</u-empty>
		</view>
		<!-- 底部 -->
		<view class="foot_box">
			<view class="check-all">
				<label>
					<radio :checked="CheckALl" @tap="changeCheckAll" /><text>全选</text>
				</label>
				<view class="total_price">
					合计：<text>￥{{totalPrice}}</text>
				</view>
			</view>
			<view class="btn" v-show="isEdit" @tap="delProduct">
				<u-button color="linear-gradient(to right,  rgba(244, 71, 57, 1) 0%, rgba(255, 102, 0, 1))" text="删除"
					:customStyle="{padding:'0 62rpx'}" shape="circle"></u-button>
			</view>
			<view class="btn" v-show="!isEdit" @tap="GoPay">
				<u-button color="linear-gradient(to right, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1))" text="结算"
					:customStyle="{padding:'0 62rpx'}" shape="circle"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//商品列表
				cartList: [{
						id: 61,
						userId: 2,
						skuId: 4,
						skuNum: 4,
						imgUrl: "https://tse3-mm.cn.bing.net/th/id/OIP-C.PV2hIkacp5ks3VdTnn1NBQHaIv?w=115&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) ",
						isChecked: false,
						skuPrice: 5999
					},
					{
						id: 62,
						userId: 2,
						skuId: 2,
						skuNum: 1,
						imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.1z5yxl4y5DPbgz7o4p4KBAHaJQ?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) 64GB ",
						isChecked: true,
						skuPrice: 5499
					},
					{
						id: 63,
						userId: 2,
						skuId: 2,
						skuNum: 1,
						imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.1z5yxl4y5DPbgz7o4p4KBAHaJQ?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) 64GB ",
						isChecked: true,
						skuPrice: 5499
					},
					{
						id: 64,
						userId: 2,
						skuId: 2,
						skuNum: 1,
						imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.1z5yxl4y5DPbgz7o4p4KBAHaJQ?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) 64GB ",
						isChecked: true,
						skuPrice: 5499
					},
					{
						id: 65,
						userId: 2,
						skuId: 2,
						skuNum: 1,
						imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.1z5yxl4y5DPbgz7o4p4KBAHaJQ?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) 64GB ",
						isChecked: false,
						skuPrice: 5499
					},
					{
						id: 66,
						userId: 2,
						skuId: 2,
						skuNum: 1,
						imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.1z5yxl4y5DPbgz7o4p4KBAHaJQ?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) 64GB ",
						isChecked: false,
						skuPrice: 5499
					},
					{
						id: 67,
						userId: 2,
						skuId: 2,
						skuNum: 1,
						imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.1z5yxl4y5DPbgz7o4p4KBAHaJQ?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) 64GB ",
						isChecked: false,
						skuPrice: 5499
					},
					{
						id: 68,
						userId: 2,
						skuId: 2,
						skuNum: 1,
						imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.1z5yxl4y5DPbgz7o4p4KBAHaJQ?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) 64GB ",
						isChecked: false,
						skuPrice: 5499
					},
					{
						id: 69,
						userId: 2,
						skuId: 2,
						skuNum: 1,
						imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.1z5yxl4y5DPbgz7o4p4KBAHaJQ?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
						skuName: "Apple iPhone 11 (A2223) 64GB ",
						isChecked: true,
						skuPrice: 5499
					}
				],
				//编辑状态
				isEdit: false,
				// 全选状态
				CheckALl: false
			}
		},
		computed: {
			//商品总价
			totalPrice() {
				const selectProduct = this.cartList.filter(item => item.isChecked);
				return selectProduct.reduce((accumulator, item) => accumulator + item.skuPrice, 0);
			}
		},
		methods: {
			// 切换选中
			radioChange(data, index) {
				this.cartList[index].isChecked = !this.cartList[index].isChecked
				console.log("我变了", this.cartList[index].isChecked)
			},
			//商品数量
			valChange(e, data) {
				console.log('当前值为: ' + e.value)
				console.log(data)
			},
			//全选
			changeCheckAll() {
				this.CheckALl = !this.CheckALl
				this.cartList.forEach(v => {
					v.isChecked = this.CheckALl
				})
			},
			//删除商品
			delProduct() {
				this.cartList = this.cartList.filter(v => {
					return v.isChecked == false
				})
			},
			//结算
			GoPay() {
				if (this.totalPrice == 0) {
					return
				}
				console.log("跳转结算")
			}
		}
	}
</script>

<style lang="scss">
	.head-box {
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		padding: 10rpx 20rpx;
		background-color: #F3F4F6;

		.count-box {
			font-size: 26rpx;

			.all-num {
				color: #EEC883;
			}
		}

		.edit {
			color: #EEC883;
			font-size: 28rpx;
		}
	}

	.content_box {
		width: 100vw;
		height: 100vh;

		.cart_item {
			display: flex;
			align-items: center;
			padding: 20rpx 40rpx;
			/* #ifdef MP-WEIXIN */
			margin-top: 86rpx;
			height: 9%;
			/* #endif */


			.checkbox {
				padding-right: 14rpx;
			}

			.product_info {
				flex: 1;
				display: flex;

				.cart_img {
					margin-right: 20rpx;
					width: 200rpx;
					background-color: #e9b564;
					border-radius: 12rpx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.info_box {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						@include ell-mline();
						word-break: break-all;
					}

					.spec {
						@include ell-mline(1);
						padding: 10rpx;
						color: #a0a0a1;
						font-size: 26rpx;
					}

					.price_count {
						display: flex;
						justify-content: space-between;
						align-items: center;

						.price {
							font-size: 28rpx;
							color: #ff6e0e;
						}

						.minus {
							width: 22px;
							height: 22px;
							border-width: 1px;
							background-color: #ff9e17;
							border-top-left-radius: 100px;
							border-top-right-radius: 100px;
							border-bottom-left-radius: 100px;
							border-bottom-right-radius: 100px;
							@include flex;
							justify-content: center;
							align-items: center;
						}

						.input {
							padding: 0 10px;
						}

						.plus {
							width: 22px;
							height: 22px;
							background-color: #ff9e17;
							border-radius: 50%;
							/* #ifndef APP-NVUE */
							display: flex;
							/* #endif */
							justify-content: center;
							align-items: center;
						}
					}
				}
			}
		}
	}

	.foot_box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		padding: 15rpx 30rpx;
		background-color: #FFFFFF;
	}

	.check-all {
		display: flex;
		align-items: center;
		font-size: 26rpx;

		.total_price {
			margin-left: 20rpx;

			text {
				color: #ff0000;
			}
		}
	}


	.pay-btn {
		width: 200rpx;
		line-height: 70rpx;
		background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
		box-shadow: 0px 7rpx 6rpx 0px rgba(229, 138, 0, 0.22);
		border-radius: 35rpx;
		padding: 0;
		color: rgba(#fff, 0.9);
	}

	.del-btn {
		width: 200rpx;
		line-height: 70rpx;
		background: linear-gradient(90deg, rgba(244, 71, 57, 1) 0%, rgba(255, 102, 0, 1) 100%);
		border-radius: 35rpx;
		padding: 0;
		color: rgba(#fff, 0.9);
	}
</style>