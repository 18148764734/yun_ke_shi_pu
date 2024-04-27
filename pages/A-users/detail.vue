<template>
	<view class="container">
		<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="options"
			:collection="collectionList" field="required,userName,phone,email,type,avator,password" :where="queryWhere"
			:getone="true" :manual="true">
			<view v-if="error">{{error.message}}</view>
			<view v-else-if="loading">
				<uni-load-more :contentText="loadMore" status="loading"></uni-load-more>
			</view>
			<view v-else-if="data">
				<view>
					<text>required</text>
					<text>{{data.required}}</text>
				</view>
				<view>
					<text>用户名</text>
					<text>{{data.userName}}</text>
				</view>
				<view>
					<text>电话</text>
					<text>{{data.phone}}</text>
				</view>
				<view>
					<text>邮箱</text>
					<text>{{data.email}}</text>
				</view>
				<view>
					<text>用户类型(是否为管理员)</text>
					<text>{{data.type == true ? '✅' : '❌'}}</text>
				</view>
				<view>
					<text>用户头像</text>
					<image :src="data.avator" style="height: 30px;width: 30px;border-radius: 30px;display: block;"></image>
				</view>
				<view>
					<text>密码</text>
					<text>{{data.password}}</text>
				</view>
			</view>
		</unicloud-db>
		<view class="btns">
			<button type="primary" @click="handleUpdate">修改</button>
			<button type="warn" class="btn-delete" @click="handleDelete">删除</button>
		</view>
	</view>
</template>

<script>
	// 由schema2code生成，包含校验规则和enum静态数据
	import {
		enumConverter
	} from '../../js_sdk/validator/A-users.js'
	const db = uniCloud.database()

	export default {
		data() {
			return {
				queryWhere: '',
				collectionList: "A-users",
				loadMore: {
					contentdown: '',
					contentrefresh: '',
					contentnomore: ''
				},
				options: {
					// 将scheme enum 属性静态数据中的value转成text
					...enumConverter
				}
			}
		},
		onLoad(e) {
			this._id = e.id
		},
		onReady() {
			if (this._id) {
				this.queryWhere = '_id=="' + this._id + '"'
			}
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
			handleUpdate() {
				// 打开修改页面
				uni.navigateTo({
					url: './edit?id=' + this._id,
					events: {
						// 监听修改页面成功修改数据后, 刷新当前页面数据
						refreshData: () => {
							this.$refs.udb.loadData({
								clear: true
							})
						}
					}
				})
			},
			handleDelete() {
				this.$refs.udb.remove(this._id, {
					success: (res) => {
						// 删除数据成功后跳转到list页面
						uni.navigateTo({
							url: './list'
						})
					}
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 10px;
	}

	.btns {
		margin-top: 10px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.btns button {
		flex: 1;
	}

	.btn-delete {
		margin-left: 10px;
	}
</style>