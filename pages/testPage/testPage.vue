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
				db.collection("article").add({
					_id:"1",
					title: "减脂餐",
					swiperImgs: [
						'https://env-00jx4xgopeln.normal.cloudstatic.cn/%E6%AF%95%E4%B8%9A%E8%AE%BE%E8%AE%A1/%E9%A3%9F%E8%B0%B1/%E7%BA%A2%E7%83%A7%E6%8E%92%E9%AA%A8.jpg'
					],
					author: "小美",
					authorId: "1",
					needs: [{
						key: "排骨",
						value1: "500g"
					}, {
						key: "耗油",
						value1: "5g"
					}, ],
					steps:['烧开水']
				}).then(async (r) => {
					// res 为数据库查询结果
					let res = await db.collection("article").get();
					console.log(res);
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