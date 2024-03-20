<template>
	<view class="content">
		<image :src="item" v-for="item in addData.swiperImgs" class="image"></image>
		<button @click="addresume()">添加数据</button>
		<button @click="goHome()">回到主页</button>
	</view>
</template>
<style lang="scss">
	.image {
		display: inline-block;
		height: 100px;
		width: 100px;
	}
</style>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {
				addData: {
					_id: "2",
					title: "羊肉炖胡萝卜",
					swiperImgs: [
						'https://env-00jx4xgopeln.normal.cloudstatic.cn/%E6%AF%95%E4%B8%9A%E8%AE%BE%E8%AE%A1/%E9%A3%9F%E8%B0%B1/%E7%BE%8A%E8%82%89%E7%82%96%E8%83%A1%E8%90%9D%E5%8D%9C2.jpg','https://env-00jx4xgopeln.normal.cloudstatic.cn/%E6%AF%95%E4%B8%9A%E8%AE%BE%E8%AE%A1/%E9%A3%9F%E8%B0%B1/%E7%BE%8A%E8%82%89%E7%82%96%E8%83%A1%E8%90%9D%E5%8D%9C1.jpg'
					],
					author: "小美",
					authorId: "1",
					needs: [{
						key: "羊肉",
						value: "500g"
					}, {
						key: "胡萝卜",
						value: "2根"
					}, {
						key: "大葱",
						value: "50g"
					}, {
						key: "姜片",
						value: "10g"
					}, {
						key: "冰糖",
						value: "40g"
					}, {
						key: "黄豆酱油",
						value: "30g"
					}, {
						key: "料酒",
						value: "10g"
					}, {
						key: "各种香料",
						value: "10g"
					}, {
						key: "盐",
						value: "3g"
					}, ],
					steps: ['羊肉切块(大小随意，我切的大约为2.5厘米见方)，因为孩子不喜欢肥的和筋膜类，所以我用的羊腿肉，瘦肉多。当然也可以选其他部位哈。', '胡萝卜去皮切滚刀块。', '羊肉凉水下锅煮开，撇去浮沫',
						'捞出备用', '胡萝卜过油炸一下', '炸至焦边且变蔫儿，备用', '大葱切大段，姜切大片，以方便之后捞出。',
						'炒锅上火烧热，加少量底油，放入羊肉、大葱、姜和冰糖一起炒，转小火多炒一会儿，至肉有焦边，且冰糖几乎融化。',
						'加酱油、料酒，继续炒一会儿。酱油我用的龙和宽黄豆酱油，没有的话用别的，或红烧酱油，颜色自己掌握一下，因为各种酱油颜色不一样，所以自己调整一下用量。',
						'参考图上香料的用量：草果(砸裂开)、肉蔻、桂皮、陈皮、小丁香、花椒、八角、小茴香。', '加入肉锅中，且加入适量开水，小火炖40分钟左右。这时我换用了小砂锅。', '加入胡萝卜和盐继续炖20分钟。',
					]
				}
			}
		},
		methods: {
			addresume() {
				db.collection("article").add(this.addData).then(async (res) => {
					// res 为数据库查询结果
					let res1 = await db.collection("article").where({_id:res.result.id}).get();
					console.log(res1);
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