<template>
	<view class="goods-card" :style="{width,height}" @click="$emit('goDetail', goodsInfo)">
		<image class="goods-card-img" :src="goodsInfo.image" mode=""></image>
		<view class="goods-card-info">
			<h4 class="goods-card-info-title">{{goodsInfo.title}}</h4>
			<text class="goods-card-info-desc">{{goodsInfo.description}}</text>
			<view class="goods-card-info-price">
				<view class="more">
					<p class="more-first">￥{{goodsInfo.price}}</p>

					<p class="more-last" v-if="goodsInfo.isDiscount">￥{{goodsInfo.discountPrice}}</p>
				</view>
				<view>
					<image class="goods-card-car" src="../static/index/images/购物车.png" ></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "GoodsCard",
		props: ['width', 'height', 'goodsInfo'],
		onShow() {
			console.log(this.goodsInfo.goodsId);
		}

	};
</script>

<style lang="scss" scoped>
	// 购物车
	.goods-card-car {
		width: 50rpx;
		height: 50rpx;
		border: 1px solid #ff5500;
		padding: 10rpx;
		border-radius: 50%;
	}
	// end

	.goods-card {
		width: 100%;
		height: 100%;
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;

		&-img {
			width: 100%;
			height: 320rpx;
			object-fit: cover;
		}

		&-info {
			padding: 10rpx;

			&-title {
				@include ell-mline(2);
				font-weight: 600;
				margin-bottom: 12rpx;
			}

			&-desc {
				@include ell-line();
				color: #999;
				font-size: 24rpx;
			}

			&-price {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 10rpx;
				padding: 0 10rpx;

				.more {

					&-first {
						font-size: 32rpx;
						color: #ff3000;
						font-weight: 500;
					}

					&-last {
						font-size: 28rpx;
						font-weight: 400;
						text-decoration: line-through;
						color: #c4c4c4;
						margin-bottom: 10rpx;
					}
				}
			}
		}
	}
</style>