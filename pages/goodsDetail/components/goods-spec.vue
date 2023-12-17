<template>
	<view class="spec">
		<u-cell :border="false" icon="grid" :title='scpeText' :isLink="true" @click="specPopup = true"></u-cell>
		<u-cell :border="false" icon="car" :title='serveiceText' :isLink="true" @click="serveicePopup = true"></u-cell>


		<!-- 规格抽屉 -->
		<view>
			 <!-- @open="open" -->
			<u-popup :round="10" :show="specPopup" @close="specPopup = false">
				<view style="height: 800rpx;">
					<text>出淤泥而不染，濯清涟而不妖</text>
				</view>
			</u-popup>
		</view>
		
		<!-- 服务抽屉 -->
		<view>
			 <!-- @open="open" -->
			<u-popup :round="10" :show="serveicePopup" @close="serveicePopup = false">
				<view style="height: 800rpx;">
					<text>出淤泥而不染，濯清涟而不妖</text>
				</view>
			</u-popup>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				scpeText: '请选择规格',
				serveiceText: '服务',
				specPopup:false,
				serveicePopup:false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.spec {
		margin-top: 14rpx;
		background-color: #FFF;
		border-radius: 10rpx;
	}
</style>