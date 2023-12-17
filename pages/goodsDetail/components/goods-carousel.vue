<template>
	<u-swiper imgMode="heightFix" radius='0' height="800rpx" :list="list6" @change="e => currentNum = e.current" :autoplay="false" indicatorStyle="right: 20px">
		<view slot="indicator" class="indicator-num">
			<text class="indicator-num__text">{{ currentNum + 1 }} / {{ list6.length }}</text>
		</view>
	</u-swiper>
</template>

<script>
	export default {
		data() {
			return {
				list6: [
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				currentNum:0
			}
		}
	}
</script>

<style lang="scss" scoped>
    .indicator {
        @include flex(row);
        justify-content: center;

        &__dot {
             height: 6px;
             width: 6px;
             border-radius: 100px;
             background-color: rgba(255, 255, 255, 0.35);
             margin: 0 5px;
             transition: background-color 0.3s;
    
            &--active {
                 background-color: #ffffff;
             }
        }
    }

    .indicator-num {
        padding: 5rpx;
        background-color: rgba(0, 0, 0, 0.35);
        border-radius: 100px;
        width: 70rpx;
        @include flex;
        justify-content: center;

        &__text {
             color: #FFFFFF;
             font-size: 12px;
         }
    }
</style>