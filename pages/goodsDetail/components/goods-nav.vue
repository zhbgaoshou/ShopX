<template>
	<view class="goods-nav">
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" bind:click="onClickIcon" />
			<van-goods-action-icon icon="cart-o" text="购物车" bind:click="onClickIcon" />
			<van-goods-action-button text="加入购物车" type="warning" bind:click="onClickButton" />
			<van-goods-action-button text="立即购买" bind:click="onClickButton" />
		</van-goods-action>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			onClickIcon(a){
				console.log(a);
			},
			onClickButton(a){
				console.log(a);
			}
		}
	
	}
</script>

<style lang="scss" scoped>
	.goods-nav {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 10;
	}
</style>