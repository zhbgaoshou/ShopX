<template>
	<view>
		<u-popup :show="show" @close="close" @open="open" round="9">
			<view>
				<!-- 登录 -->
				<view style="padding: 0 20rpx;" v-show="curNow==1">

					<u-tabs :list="tablist" lineHeight="0" @change="sectionChange"
						:activeStyle="{ color: '#000000',fontSize:'32rpx',fontWeight:'700' }"></u-tabs>
					<!-- 账号 -->
					<view class="account login" v-if="tabindex==0">
						<view class="tips">如果未设置过密码，请点击忘记密码</view>
						<u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
							<u-form-item label="账号" prop="userInfo.name" borderBottom ref="item1">
								<u--input placeholder="请输入账号" v-model="model1.userInfo.name" border="none"></u--input>
							</u-form-item>
							<u-form-item label="密码" prop="userInfo.password" borderBottom ref="item2">
								<u--input placeholder="请输入密码" password clearable v-model="model1.userInfo.password"
									border="none">
									<!-- 	<template slot="suffix">
										<u-button
											@tap="login"
											text="登录"
											type="success"
											size="mini"
										></u-button>
									</template> -->
								</u--input>
							</u-form-item>
						</u--form>
					</view>
					<!-- 短信 -->
					<view class="sms login" v-if="tabindex==2">
						<view class="tips">未注册手机号请先点击下方立即注册</view>
					</view>
				</view>
				<!-- 注册 -->
				<view v-show="curNow==0">
					<view style="height: 400px;">
						我是注册
					</view>
				</view>
			</view>
		</u-popup>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//是否弹出
				show: false,
				tablist: [{
					name: '账号登录'
				}, {
					name: ' ',
					disabled: true
				}, {
					name: '短信登录'
				}],
				//登录类型
				tabindex: 0,
				//0注册、1登录
				curNow: 1,
				model1: {
					userInfo: {
						name: '',
					},
				},
				rules: {
					'userInfo.name': {
						type: 'string',
						required: true,
						message: '请输入账号',
						trigger: ['blur', 'change']
					}
				},
			}
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			sectionChange(data) {
				this.tabindex = data.index;
			}
		}
	}
</script>

<style lang="scss">
	.login {
		height: 400px;
	}

	.tips {
		color: #b8b8b8;
		font-size: 26rpx;
	}
</style>