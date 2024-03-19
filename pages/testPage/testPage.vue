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
					title:"标题1",
					swiperImgs:[],
					author:"",
					needs:[{key:"素材",value1:"50ss"}]
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