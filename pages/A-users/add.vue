<template>
	<view class="uni-container">
		<uni-forms ref="form" :model="formData" validate-trigger="submit" err-show-type="toast">
			<uni-forms-item name="required" label="">
				<undefined v-model="formData.required"></undefined>
			</uni-forms-item>
			<uni-forms-item name="userName" label="用户名">
				<uni-easyinput v-model="formData.userName" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="phone" label="电话">
				<uni-easyinput v-model="formData.phone" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="email" label="邮箱">
				<uni-easyinput v-model="formData.email" trim="both"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="type" label="用户类型(是否为管理员)">
				<switch @change="binddata('type', $event.detail.value)" :checked="formData.type"></switch>
			</uni-forms-item>
			<uni-forms-item name="avator" label="用户头像">
				<uni-easyinput v-model="formData.avator"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="password" label="密码">
				<uni-easyinput v-model="formData.password" trim="both"></uni-easyinput>
			</uni-forms-item>
			<view class="uni-button-group">
				<button type="primary" class="uni-button" @click="submit">提交</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	import {
		validator
	} from '../../js_sdk/validator/A-users.js';

	const db = uniCloud.database();
	const dbCollectionName = 'A-users';

	function getValidator(fields) {
		let result = {}
		for (let key in validator) {
			if (fields.indexOf(key) > -1) {
				result[key] = validator[key]
			}
		}
		return result
	}



	export default {
		data() {
			let formData = {
				"required": null,
				"userName": "",
				"phone": "",
				"email": "",
				"type": false,
				"avator": "",
				"password": ""
			}
			return {
				formData,
				formOptions: {},
				rules: {
					...getValidator(Object.keys(formData))
				}
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			goBack() {
				// 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
				const pages = getCurrentPages()
				if (pages && pages.length > 0) {
					const firstPage = pages[0]
					if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index')) {
						uni.reLaunch({
							url: '/pages/index'
						})
					} else {
						uni.navigateBack({
							delta: 1
						})
					}
				} else {
					uni.reLaunch({
						url: '/pages/index'
					})
				}
			},
			/**
			 * 验证表单并提交
			 */
			submit() {
				uni.showLoading({
					mask: true
				})
				this.$refs.form.validate().then((res) => {
					return this.submitForm(res)
				}).catch(() => {}).finally(() => {
					uni.hideLoading()
				})
			},

			/**
			 * 提交表单
			 */
			submitForm(value) {
				// 使用 clientDB 提交数据
				return db.collection(dbCollectionName).add(value).then((res) => {
					uni.showToast({
						icon: 'none',
						title: '新增成功'
					})
					this.getOpenerEventChannel().emit('refreshData')
					setTimeout(() => uni.navigateBack(), 500)
				}).catch((err) => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					})
				})
			}
		}
	}
</script>

<style>
	.uni-container {
		padding: 15px;
	}

	.uni-input-border,
	.uni-textarea-border {
		width: 100%;
		font-size: 14px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
	}

	.uni-input-border {
		padding: 0 10px;
		height: 35px;

	}

	.uni-textarea-border {
		padding: 10px;
		height: 80px;
	}

	.uni-button-group {
		margin-top: 50px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
	}

	.uni-button {
		width: 184px;
	}
</style>