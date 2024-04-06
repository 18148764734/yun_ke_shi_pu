<template>
	<view class="template-product tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
				<text class="icon tn-icon-left"></text>
				<text class="icon tn-icon-home-capsule-fill"></text>
			</view>
		</tn-nav-bar>

		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="5000" @change="cardSwiper">
			<swiper-item v-for="(item, index) in data.swiperImgs" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item, index) in data.swiperImgs" :key="index">
				<view class="spot" :class="cardCur == index ? 'active' : ''"></view>
			</block>
		</view>

		<view class="tn-margin">
			<view class="tn-flex tn-flex-row-between">
				<view class="justify-content-item tn-text-bold tn-text-xxl">
					{{data.title}}
				</view>
			</view>
			<view class="tn-flex tn-flex-row-between tn-margin-top">
				<view class="justify-content-item tn-text-bold tn-color-purplered">
					<text style="font-size: 50rpx">免费分享</text>
				</view>
				<view class="justify-content-item tn-color-gray tn-padding-top-xs">
					<view class="">已查看 729</view>
				</view>
			</view>
		</view>

		<!-- 边距间隔 -->
		<view class="tn-strip-bottom"></view>

		<view class="tn-margin">
			<view class="justify-content-item tn-text-bold tn-text-xl">
				所需食材
			</view>

			<view class="justify-content-item tn-color-gray" v-for="(item,index) in data.needs" :key="index">
				<text class="key">{{item.key+":"}}</text>
				<text class="value">{{item.value}}</text>
			</view>
			<view class="justify-content-item tn-text-bold tn-text-xl">
				做法步骤
			</view>
			<view class="justify-content-item tn-color-gray">

				<view class="justify-content-item tn-color-gray" v-for="(item,index) in data.steps" :key="index">
					<text class="value">{{(index+1)+"、"+item}}</text>
				</view>
			</view>
			<view class="justify-content-item tn-text-bold tn-text-xl">
				营养构成
			</view>
			<view class="justify-content-item tn-color-gray">
				<view class="charts-box">
					<qiun-data-charts type="pie" :opts="opts" :chartData="chartData" />
				</view>
			</view>
		</view>


		<!-- 边距间隔 -->
		<view class="tn-strip-bottom"></view>

		<view class="tn-margin">
			<view class="tn-flex tn-flex-row-between">
				<view class="justify-content-item tn-text-bold tn-text-xl"> 评论 </view>
			</view>
		</view>



		<view class="tn-tag-content tn-margin tn-text-justify commentContainer">
			<view class="item" style="background-color: #ffaa7f;">
				<view class="right-top">
					<image
						src="https://env-00jx4xgopeln.normal.cloudstatic.cn/avater.png?expire_at=1712395186&er_sign=35a275d82b0ccb4d3d28e56c0e130a03"
						class="avater"></image>
					<view class="nameTime">

						<text class="userName">{{userName}}</text>
						<text class="time">{{timestampToDateTime(new Date().getTime())}}</text>
					</view>
				</view>

				<!-- <text class="content">我爱你</text> -->
				<uni-easyinput class="input" type="textarea" v-model="text" placeholder="请尽情发表您的言论吧!" />
				<button class="button" type="primary" @click="comment">评论</button>
			</view>
			<view class="item" v-for="(item,index) in commentList">
				<view class="right-top">
					<image
						src="https://env-00jx4xgopeln.normal.cloudstatic.cn/avater.png?expire_at=1712395186&er_sign=35a275d82b0ccb4d3d28e56c0e130a03"
						class="avater" />
					<view class="nameTime">
						<text class="userName">{{item.userName}}</text>
						<text class="time">{{timestampToDateTime(item.time)}}</text>
					</view>
				</view>

				<!-- <text class="content">我爱你</text> -->
				<text class="content" type="textarea">{{item.text}}</text>
			</view>
		</view>

		<!-- 边距间隔 -->
		<view class="tn-strip-bottom"></view>

		<!-- 图标logo/头像 -->
		<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin" @click="tn('/preferredPages/shop')">
			<view class="justify-content-item">
				<view class="tn-flex tn-flex-col-center tn-flex-row-left">
					<view class="logo-pic tn-shadow">
						<view class="logo-image">
							<view class="tn-shadow-blur" style="
                  background-image: url('https://env-00jx4xgopeln.normal.cloudstatic.cn/avater.png?expire_at=1712395186&er_sign=35a275d82b0ccb4d3d28e56c0e130a03');
                  width: 110rpx;
                  height: 110rpx;
                  background-size: cover;
                ">
							</view>
						</view>
					</view>
					<view class="tn-padding-right tn-color-black">
						<view class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold">
							{{data.author}}
						</view>
						<view class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-padding-left-sm">
							<text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
							<text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
							<text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
							<text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
							<text class="tn-color-purplered tn-icon-flower-fill tn-text-lg"></text>
							<text class="tn-color-brown tn-padding-left-xs tn-text-bold">5.0</text>
						</view>
					</view>
				</view>
			</view>
			<view class="justify-content-item tn-flex-row-center">
				<view class="tn-cool-bg-color-15 tn-padding-xs tn-color-white tn-round tn-shadow-blur">
					<text class="tn-padding-left-xs">查看更多</text>
					<text class="tn-icon-send-fill tn-padding-xs"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import template_page_mixin from "@/libs/mixin/template_page_mixin.js";
	const db = uniCloud.database();
	export default {
		name: "TemplateProduct",
		mixins: [template_page_mixin],
		data() {
			return {
				cardCur: 0,
				opts: {
					color: [
						"#1890FF",
						"#91CB74",
						"#FAC858",
						"#EE6666",
						"#73C0DE",
						"#3CA272",
						"#FC8452",
						"#9A60B4",
						"#ea7ccc",
					],
					padding: [5, 5, 5, 5],
					enableScroll: false,
					extra: {
						pie: {
							activeOpacity: 0.5,
							activeRadius: 10,
							offsetAngle: 0,
							labelWidth: 15,
							border: false,
							borderWidth: 3,
							borderColor: "#FFFFFF",
						},
					},
				},
				chartData: {
					series: [{
						data: [{
								name: "维生素A",
								value: Math.random() * 100
							},
							{
								name: "蛋白质",
								value: Math.random() * 100
							},
							{
								name: "能量",
								value: Math.random() * 100
							},
							{
								name: "维生素E",
								value: Math.random() * 100
							},
							{
								name: "矿物质钙",
								value: Math.random() * 100
							},
						],
					}, ],
				},
				current: 0,
				userName: uni.getStorageSync("userName"),
				tagList: [{
						color: "cyan",
						title: "美味",
					},
					{
						color: "blue",
						title: "营养",
					},
					{
						color: "green",
						title: "独家原创",
					},
				],
				data: {},
				articleId: "",
				text: '',
				commentList: [],
			};
		},
		methods: {
			async comment() {
				console.log(this.addData)
				if (!this.text) {
					uni.showToast({
						icon: "error",
						title: "评论不能为空！"
					})
				} else {
					let res = await db.collection("comments").add({
						text: this.text,
						articleId: this.articleId,
						userName: this.userName
					});
					if (res.result.code === 0) {
						this.text = "";
						uni.showToast({
							icon: "success",
							title: "评论成功！"
						})
						let res1 = await db.collection("comments").where({
							articleId: this.articleId
						}).get();
						let data1 = res1.result.data;
						this.commentList = data1;
					} else {
						uni.showToast({
							icon: "error",
							title: "评论不能为空！"
						})
					}
					console.log("res: " + JSON.stringify(res));
				}
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// tab选项卡切换
			tabChange(index) {
				this.current = index;
			},
			getRandomCoolBg() {
				return this.$t.colorUtils.getRandomCoolBgClass();
			},
			timestampToDateTime(timestamp) {
				var date = new Date(timestamp); // 如果时间戳是毫秒级别的，就不需要乘以1000
				var year = date.getFullYear();
				var month = ("0" + (date.getMonth() + 1)).slice(-2);
				var day = ("0" + date.getDate()).slice(-2);
				var hour = ("0" + date.getHours()).slice(-2);
				var minute = ("0" + date.getMinutes()).slice(-2);
				var second = ("0" + date.getSeconds()).slice(-2);
				return year + "-" + month + "-" + day + " " + hour + ":" + minute;
			}
		},
		onLoad: async function(params) {
			// console.log(params.id);
			if (!params.id) {
				this.tn('/preferredPages/classify')
			} else {
				this.articleId = params.id;
				let res = await db.collection("article").where({
					_id: params.id
				}).get();
				let res1 = await db.collection("comments").where({
					articleId: this.articleId
				}).get();
				let data = res.result.data[0];
				let data1 = res1.result.data;
				this.commentList = data1;
				console.log(JSON.stringify(this.commentList));
				this.data = data;
			}

		}
	};
</script>

<style lang="scss" scoped>
	.addComment {
		display: flex;
		background: #783737;
		width: 80px;
		height: 40px;
	}

	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.commentContainer {
		@extend .flex;
		flex-direction: column;

		.item {
			display: flex;
			justify-content: left;
			background-color: #f8f9fb;
			border-radius: 10px;
			border: #ffd4c6 solid 1px;
			width: 90vw;
			flex-direction: column;
			padding: 10px;
			margin-top: 10px;

			.right-top {
				@extend .flex;
				position: relative;
				left: 10px;
				justify-content: left;
				color: #582828;

				.avater {
					border-radius: 50%;
					width: 60px;
					height: 60px;
				}

				.nameTime {
					height: 80%;
					margin-left: 20px;
					@extend .flex;
					flex-direction: column;

					.userName {
						font-size: 20px;
						font-weight: 900;
						display: flex;
						justify-content: center;
					}

					.time {
						font-size: 16px;
					}
				}

			}

			.button {
				@extend .flex;
				background-color: #3a9a7d;
				color: #fff;
				font-size: 16px;
				width: 80px;
				height: 28px;
				border: #a4d8d2 solid 1px;
				box-shadow: #b4ddd8 0px 0px 10px 2px;
				position: relative;
				margin-top: 10px;

			}

			.content {
				border-radius: 10px;
				background-color: #fdfdf2;
				font-size: 16px;
				margin-top: 10px;
				color: #28735d;
				border: #b6e6ca solid 1px;
				padding: 10px;
			}
		}
	}

	.key {
		color: #783737;
		font-size: 16px;
		margin-right: 5px;
	}

	.value {
		color: #9f2620;
		font-size: 18px;
	}

	.justify-content-item {
		margin: 10px;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 用户头像 start */
	.logo-image {
		width: 110rpx;
		height: 110rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 10rpx;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.15);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		color: #ffffff;
		font-size: 18px;

		.icon {
			display: block;
			flex: 1;
			margin: auto;
			text-align: center;
		}

		&:before {
			content: " ";
			width: 1rpx;
			height: 110%;
			position: absolute;
			top: 22.5%;
			left: 0;
			right: 0;
			margin: auto;
			transform: scale(0.5);
			transform-origin: 0 0;
			pointer-events: none;
			box-sizing: border-box;
			opacity: 0.7;
			background-color: #ffffff;
		}
	}

	/* 轮播视觉差 start */
	.card-swiper {
		height: 750rpx !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		// padding: 0rpx 30rpx 90rpx 30rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #ffffff;
		opacity: 0.6;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -60rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #ffffff;
	}

	/* 间隔线 start*/
	.tn-strip-bottom-min {
		width: 100%;
		border-bottom: 1rpx solid #f8f9fb;
	}

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: transparent;

		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 46rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 底部tabbar start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 45rpx;
			padding: 10rpx 30rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 标签内容 end*/

	/* 内容图 start */
	.content-backgroup {
		z-index: -1;

		.backgroud-image {
			border-radius: 15rpx;
			width: 100%;
		}
	}

	/* 内容图 end */

	/* 商家商品 start*/
	.tn-blogger-content {
		&__wrap {
			box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
			border-radius: 20rpx;
			margin: 15rpx;
		}

		&__info {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__label {
			&__item {
				line-height: 45rpx;
				padding: 0 10rpx;
				margin: 5rpx 18rpx 0 0;

				&--prefix {
					color: #e83a30;
					padding-right: 10rpx;
				}
			}

			&__desc {
				line-height: 35rpx;
			}
		}

		&__main-image {
			border-radius: 16rpx 16rpx 0 0;

			&--1 {
				max-width: 690rpx;
				min-width: 690rpx;
				max-height: 400rpx;
				min-height: 400rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 24rpx;
			padding-right: 5rpx;
		}
	}

	.image-book {
		padding: 150rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-picbook {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 15rpx 15rpx 0 0;
	}

	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}
</style>