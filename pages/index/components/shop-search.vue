<template>
	<view class="search">
		<u-search :disabled="true" @click="goSearch" @custom="goSearch"  placeholder="请输入关键字" ></u-search>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:''
			}
		},
		methods:{
			goSearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		}
	}
</script>


<style lang="scss" scoped>
	.search {
		box-sizing: border-box;
		width: 100%;
		position: fixed;
		margin-top: -1px;
		padding: 20rpx;
		z-index: 10;
		background-color: #fff;
	}
</style>