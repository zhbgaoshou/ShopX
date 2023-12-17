<template>
	<view class="info">
		<view class="price">
			<text class="first">￥700.00</text>
			<text class="last" style="margin-left: 15rpx;">￥500.00</text>
		</view>
		
		<view class="title">
			<text>乔丹运动鞋男鞋2020春夏季新款轻便耐磨气垫透气跑步鞋男</text>
		</view>
		
		<view class="desc">
			<text>乔丹正品 专业跑步鞋</text>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
	.info{
		padding: 30rpx 14rpx;
		border-radius: 10rpx;
		background-color: #fff;
		.price{
				
			.first{
				font-size: 38rpx;
				color: #ff3000;
				font-weight: 500;
			}
			
			.last{
				font-size: 28rpx;
				font-weight: 400;
				text-decoration: line-through;
				color: #c4c4c4;
				margin-bottom: 10rpx;
			}
		}
		
		.title{
			margin: 30rpx 0;
			@include ell-mline(2);
			font-weight: 600;
		}
		
		.desc{
			@include ell-line();
			color: #999;
			font-size: 24rpx;
		}
	}
</style>