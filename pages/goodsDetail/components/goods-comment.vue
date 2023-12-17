<template>
	<view class="comment">
		<view class="comment-head">
			<u-cell icon="chat" :titleStyle="titleStyle" :iconStyle="titleStyle" title="评论" :isLink="true"
				value="全部评论"></u-cell>
		</view>
		
		<view class="comment-main">
			<u-empty :show="commentList.length <= 0" mode="comment"
				icon="http://cdn.uviewui.com/uview/empty/comment.png">
			</u-empty>
			
			<view class="comment-main-card" v-for="i in 5">
				<!-- 头像，名字，星级 -->
				<view style="display: flex;align-items: center;">
					<u-avatar :src="src"></u-avatar>
					<text style="margin: 0 16rpx;font-size: 28rpx;color: #666;">用户******</text>
					<u-rate :count="5" v-model="rate"></u-rate>
				</view>
				<!-- 图片 -->
				<view style="margin: 10rpx 0;">
					<!-- <u--image radius='8px'  :showLoading="true" src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px" height="80px" @click="click"></u--image> -->
				</view>
				<!-- 文字 -->
				<view style="padding: 30rpx 0;padding-top: 10rpx;;font-size: 26rpx;">客户默认好评~~~</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rate:4,
				src:'https://img1.baidu.com/it/u=2837426444,1036569200&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702918800&t=c0460531329cc1c4fbb1c2eea8dbf15c',
				titleStyle: {
					'font-weight': 600
				},
				commentList: [
					'op'
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment {
		margin-top: 14rpx;
		background-color: #FFF;
		border-radius: 10rpx;

		&-main {
			padding: 14rpx;
			padding-bottom: 10rpx;
			
			&-card{
				border-bottom: 1px solid #dce2e2;
				margin: 20rpx 0;
			}
		}
	}
</style>