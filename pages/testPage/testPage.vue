<template>
	<view class="content">
		<button @click="addresume()">添加数据</button>
		<button @click="goHome()">回到主页</button>
	</view>
</template>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {}
		},
		methods: {
			addresume() {
				db.collection("A-users").add({
					"userName": "18148764734",
					"password": "qq830303",
				}).then((res) => {
					// res 为数据库查询结果
					console.log(res)
				}).catch((err) => {
					console.log(err.message)
				});
			},
			goHome() {
				uni.navigateTo({
					url: "/pages/index"
				})
			}

		}
	}
</script>