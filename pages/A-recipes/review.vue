<template>
	<view class="template-blogger tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<!-- 立体头像-->
		<view class='cube' :style="'background-image: url(https://resource.tuniaokj.com/images/blogger/bg_image_1.jpg);'">
			<view class="cube__container">
				<view class="cube__container__body">
					<view class="cube__container__body__item cube__container__body__item--front"
						:style="{backgroundImage: `url(${userInfo.avatar[0]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--back"
						:style="{backgroundImage: `url(${userInfo.avatar[0]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--right"
						:style="{backgroundImage: `url(${userInfo.avatar[1]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--left"
						:style="{backgroundImage: `url(${userInfo.avatar[1]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--top"
						:style="{backgroundImage: `url(${userInfo.avatar[2]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--bottom"
						:style="{backgroundImage: `url(${userInfo.avatar[2]})`}"></view>
				</view>
			</view>


			<view class='tn-text-center tn-margin-top-lg'>
				<view class="tn-padding tn-text-bold tn-text-lg">{{ userInfo.username }}</view>
				<view class="tn-padding-bottom-xl tn-text-lg">{{ userInfo.title }}</view>
			</view>
		</view>

		<!-- 消息&数据 -->
		<view class="blogger-tips-data">
			<view class="blogger-tips-data__wrap tn-bg-white">
				<view class="blogger-tips-data__message tn-flex tn-flex-row-center" @click="tn('/minePages/message')">
					<view
						class="blogger-tips-data__message__container tn-flex tn-flex-row-center tn-flex-col-center tn-bg-gray--light">
						<view style="border-radius: 50%;background-color: red;height: 20rpx;width: 20rpx;margin-left: 20rpx">
						</view>
						<view class="tn-padding-right tn-padding-left">{{ stateCount.messageCount }} 条未审核</view>
					</view>
				</view>
				<view class="blogger-tips-data__info tn-flex">
					<view class="tn-flex-1 tn-padding-sm tn-margin-xs" @click="changeState('0')" :class="getStateClass('0')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view class="">
								<view class="tn-text-xxl tn-color-orange">
									{{ $t.number.formatNumberAddPriceUnit(stateCount.yetCount) }}
								</view>
							</view>
							<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
								<text class="tn-padding-left-xs">未审核</text>
							</view>
						</view>
					</view>
					<view class="tn-flex-1 tn-padding-sm tn-margin-xs" @click="changeState('1')"
						:class="getStateClass('1')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view class="">
								<view class="tn-text-xxl tn-color-blue">
									{{ $t.number.formatNumberAddPriceUnit(stateCount.yesCount) }}
								</view>
							</view>
							<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
								<text class="tn-padding-left-xs">已审核</text>
							</view>
						</view>
					</view>
					<view class="tn-flex-1 tn-padding-sm tn-margin-xs" @click="changeState('2')"
						:class="getStateClass('2')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view class="">
								<view class="tn-text-xxl tn-color-red">
									{{ $t.number.formatNumberAddPriceUnit(stateCount.noCount) }}
								</view>
							</view>
							<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
								<text class="tn-padding-left-xs">未通过审核</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 内容 -->
		<view class="tn-flex tn-flex-direction-column tn-margin-top-sm tn-margin-bottom">

			<!-- 图文信息 -->
			<block v-for="(item,index) in content" :key="index">
				<view class="blogger__item  box">
					<view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
						<view class="justify__author__info">
							<view class="tn-flex tn-flex-row-center">
								<view class="tn-flex tn-flex-row-center tn-flex-col-center">
									<view class="tn-padding-right tn-text-ellipsis">
										<view class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg">{{ item.title }}
										</view>
										<!-- <view class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray">{{ "2023年3" }}
										</view> -->
									</view>
									<view style="position: absolute;right: 30px;">
										<button type="primary" size="mini" style="margin-right: 20px;" @click="setType(item._id,1)"
											v-if="currentState!=='1'">合格</button>
										<button type="primary" style="background-color: red;" size="mini" @click="setType(item._id,2)"
											v-if="currentState!=='1'">不合格</button>
									</view>
								</view>
							</view>
						</view>
					</view>

					<view
						class="blogger__title tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left"
						@click="tn('/pages/details?id=' + item._id)">
						<view v-for="(label_item,label_index) in item.label" :key="label_index"
							class="blogger__title__label tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
							<text class="blogger__title__label--prefix">#</text>
							<text class="tn-text-df">{{ label_item }}</text>
						</view>
						<!-- 不用限制长度了，因为发布的时候限制长度了-->
						<text v-if="!item.label || item.label.length < 4"
							class="blogger__title__content tn-flex-1 tn-text-justify tn-text-df">{{"作者:" + item.author }}</text>
					</view>


					<block v-if="item.swiperImgs">
						<view v-if="[1,2,4].indexOf(item.swiperImgs.length) != -1" class="tn-padding-top-xs"
							@click="tn('/pages/details?id=' + item._id)">
							<image v-for="(image_item,image_index) in item.swiperImgs" :key="image_index" class="blogger__main-image"
								:class="{
                  'blogger__main-image--1 tn-margin-bottom-sm': item.swiperImgs.length === 1,
                  'blogger__main-image--2 tn-margin-right-sm tn-margin-bottom-sm': item.swiperImgs.length === 2 || item.swiperImgs.length === 4
                }" :src="image_item" mode="aspectFill"></image>
						</view>
						<view v-else class="tn-padding-top-xs" @click="tn('/pages/details?id=' + item._id)">
							<tn-grid hoverClass="none" :col="3">
								<block v-for="(image_item,image_index) in item.swiperImgs" :key="image_index">
									<!-- #ifndef MP-WEIXIN -->
									<tn-grid-item style="width: 30%;margin: 10rpx;">
										<image class="blogger__main-image blogger__main-image--3" :src="image_item" mode="aspectFill">
										</image>
									</tn-grid-item>
									<!-- #endif-->
									<!-- #ifdef MP-WEIXIN -->
									<tn-grid-item style="width: 30%;margin: 10rpx;">
										<image class="blogger__main-image blogger__main-image--3" :src="image_item" mode="aspectFill">
										</image>
									</tn-grid-item>
									<!-- #endif-->
								</block>
							</tn-grid>
						</view>
					</block>
				</view>

				<!-- 边距间隔 -->
				<view class="tn-strip-bottom" v-if="index != content.length - 1"></view>
			</block>

			<!-- 边距间隔 -->
			<view class="tn-strip-bottom"></view>

			<!-- 广告 -->
			<view class="blogger__item" @click="tn('/circlePages/advertise')">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
					<view class="justify-content-item">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left">
							<!-- 图标logo -->
							<view class="ad-pic tn-shadow-blur"
								style="background-image:url('https://resource.tuniaokj.com/images/logo/logo2.png')">
								<view class="ad-image">
								</view>
							</view>
							<view class="tn-padding-right" style="width: 65vw;">
								<view class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg">韵科食谱招商广告</view>
								<view class="tn-padding-right tn-padding-left-sm tn-color-gray tn-text-ellipsis">请联系我们</view>
							</view>

						</view>
					</view>
					<view class="tn-color-gray">广告</view>
				</view>
				<tn-stack-swiper ref="stackSwiper" :list="adList" :switchRate="30" :height="360" width="92%"
					:autoplay="adAutoplay"></tn-stack-swiper>
			</view>

			<!-- 边距间隔 -->
			<view class="tn-strip-bottom"></view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database().collection("article");
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateBlogger',
		mixins: [template_page_mixin],
		data() {
			return {
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,
				userInfo: {
					avatar: [
						'https://env-00jx4xgopeln.normal.cloudstatic.cn/userAvator18148764734.png',
						'https://env-00jx4xgopeln.normal.cloudstatic.cn/userAvator18148764734.png',
						'https://env-00jx4xgopeln.normal.cloudstatic.cn/userAvator18148764734.png',
					],
					username: "审核官：" + uni.getStorageSync("userName"),
					title: '认真审核，服务至上'
				},
				stateCount: {
					latestMessageUserAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
					messageCount: 3,
					yetCount: 0,
					yesCount: 1,
					noCount: 2,
				},
				totalList: [],
				currentState: "1",

				// adSwiperCurrentIndex: 0,
				adList: [{
						image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/09/peaches.jpg'
					},
					{
						image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/09/beef-cut-close-up.jpg'
					},
					{
						image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/10/chocolate-cookies.jpg'
					}
				],
				adAutoplay: false
			}
		},
		computed: {
			content() {
				let res = this.totalList.filter(item => item.authorId === this.currentState)
				return res;
			},

			getStateClass(state) {
				return (state) => this.currentState === state ? "selected" : "nomal";
			},
		},
		async onLoad() {
			await this.init();
		},
		onReady() {
			this.$nextTick(() => {
				this.getContentRectInfo()
			})
		},
		onShow() {
			this.adAutoplay = true
		},
		onHide() {
			this.adAutoplay = false
		},
		methods: {
			async init() {
				let res = await db.field("id,swiperImgs,title,classify,author,authorId").get();
				this.totalList = res.result.data;
				console.log(this.totalList)
				this.initContentData()
				this.stateCount.messageCount = this.stateCount.yetCount = this.totalList.filter(item => item.authorId === "0")
					.length;
				this.stateCount.yesCount = this.totalList.filter(item => item.authorId === "1").length;
				this.stateCount.noCount = this.totalList.filter(item => item.authorId === "2").length;
				this.contentHideShowHeight = uni.upx2px(56) * 3;
			},
			changeState(state) {
				this.currentState = state;
			},
			async setType(id, state) {
				let res = await db.doc(id).update({
					authorId: JSON.stringify(state)
				});
				console.log(res)
				await this.init();
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 震动跳转
			navEdit(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: '/circlePages/edit'
				})
			},
			// 处理内容，给内容添加对应的标识信息
			initContentData() {
				this.content.forEach((item, index) => {
					// 是否需要隐藏内容
					item.hideContent = false
					// 显示所有内容
					item.showAllContent = false
					// 内容容器的实际高度
					item.contentContainerHeight = 0
					// 内容容器是否初始化完成
					item.contentContainerInit = false
					this.$set(this.content, index, item)
				})
			},
			// 获取内容容器的信息
			getContentRectInfo() {
				let contentRect = {}
				const query = uni.createSelectorQuery().in(this)
				// 筛选出存在内容的数据
				this.content.forEach((item, index) => {
					if (item?.content) {
						query.select(`#blogger__content--${index}`).boundingClientRect()
						contentRect[index] = item
					}
				})
				// 获取所有内容的宽高信息
				query.exec(res => {
					if (!res) {
						setTimeout(() => {
							this.getContentRectInfo()
						}, 10)
						return
					}
					// console.log(res);
					res.map((item) => {
						// console.log(item.height, this.contentHideShowHeight);
						// 获取对应的标号
						const id = item.id
						const idIndex = /blogger__content--(\d)/.exec(id)[1]
						let contentItem = this.content[idIndex]
						contentItem.hideContent = item.height > this.contentHideShowHeight
						contentItem.showAllContent = false
						contentItem.contentContainerHeight = item.height
						contentItem.contentContainerInit = true
						this.$set(this.content, idIndex, contentItem)

						// console.log(/blogger__content--(\d)/.exec(id)[1]);
					})
				})
			},
			// 切换内容的显示与隐藏
			switchContentShowStatus(index) {
				const contentItem = this.content[index]
				contentItem.showAllContent = !contentItem.showAllContent
				this.$set(this.content, index, contentItem)
			},


			// adSwiperChange(e) {
			//   // console.log(e);
			//   this.adSwiperCurrentIndex = e.detail.current
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.selected {
		background-color: #c2c2c2;
		color: black;
		box-shadow: #242424 0 0 5px 1px;
		border-radius: 10px;
	}

	.nomal {
		background-color: #f3f3f3;
		border-radius: 10px;
	}

	.box {
		border-radius: 10px;
		border: #ffe203 solid 2px;
		border-width: 1px;
		margin: 5px;
		background-color: #F8F7F3;
	}

	.template-blogger {}

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
		color: #FFFFFF;
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
			background-color: #FFFFFF;
		}
	}

	$cube-size: 120rpx;
	$cube-split: 60rpx;

	/* 立体头像 start*/

	.cube {
		background: #fff;
		background-repeat: no-repeat;
		background-size: cover;
		height: 550rpx;
		display: flex;
		justify-content: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		font-weight: 300;

		&__container {
			margin-top: 180rpx;
			position: relative;
			width: $cube-size;
			height: $cube-size;
			-webkit-perspective: 500px;
			perspective: 500px; //透视太大会超过屏幕就不好了吖

			&:before {
				content: '';
				width: $cube-size;
				height: $cube-size;
				position: absolute;
				// top: calc(50% - ($cube-split - 30px));
				// left: calc(50% - $cube-split);
				background-color: #3c6496;
				filter: blur(60px);
				opacity: .8;
			}

			&__body {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-style: preserve-3d;
				transform: translateZ(-75px);
				animation: cubeFrame 35s cubic-bezier(0.36, -0.03, 0.46, 0.95) infinite alternate;
				will-change: transform;

				&__item {
					position: absolute;
					display: block;
					display: flex;
					align-items: center;
					justify-content: center;
					width: $cube-size;
					height: $cube-size;
					font-size: 30px;
					background-repeat: no-repeat;
					background-size: cover;

					&--front {
						transform: rotateY(0deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--back {
						transform: rotateX(180deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--right {
						transform: rotateY(90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--left {
						transform: rotateY(-90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--top {
						transform: rotateX(90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--bottom {
						transform: rotateX(-90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}
				}
			}
		}
	}

	@keyframes cubeFrame {
		10% {
			transform: translateZ(-75px) rotateX(40deg) rotateY(60deg);
		}

		15% {
			transform: translateZ(-75px) rotateX(80deg) rotateY(20deg);
		}

		20% {
			transform: translateZ(-75px) rotateX(-180deg) rotateY(-70deg);
		}

		30% {
			transform: translateZ(-75px) rotateX(90deg) rotateY(180deg);
		}

		40% {
			transform: translateZ(-75px) rotateX(-10deg) rotateY(-140deg);
		}

		45% {
			transform: translateZ(-75px) rotateX(-100deg) rotateY(20deg);
		}

		55% {
			transform: translateZ(-75px) rotateX(-10deg) rotateY(-35deg);
		}

		60% {
			transform: translateZ(-75px) rotateX(180deg) rotateY(360deg);
		}

		70% {
			transform: translateZ(-75px) rotateX(-180deg) rotateY(-360deg);
		}

		80% {
			transform: translateZ(-75px) rotateX(45deg) rotateY(-70deg);
		}

		90% {
			transform: translateZ(-75px) rotateX(-45deg) rotateY(70deg);
		}

		100% {
			transform: translateZ(-75px) rotateX(-360deg) rotateY(360deg);
		}
	}

	/* 立体头像 end*/

	/* 信息提示 start */
	.blogger-tips-data {
		background-color: #F8F7F3;

		&__wrap {
			border-radius: 60rpx 60rpx 0 0;
		}

		&__message {
			padding-top: 60rpx;

			&__container {
				padding: 5rpx;
				border-radius: 100rpx;
			}

			&__avatar {
				margin: 6rpx 0 0 6rpx;
			}
		}

		&__info {
			padding: 40rpx 0 0 0;
		}
	}

	/* 信息提示 end */

	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__title {
			line-height: 55rpx;

			&__label {
				padding: 0 20rpx;
				margin: 0rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}

			&__content {}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;
			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82B2FF;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
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
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */

	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}



	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		/* border: 4px solid #5ec0ff; */
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}

	@keyframes hx {
		to {
			transform: rotate(360deg);
		}
	}

	.hx-k1 {
		transform: rotateX(-60deg) rotateZ(-60deg)
	}

	.hx-k2 {
		transform: rotateX(-30deg) rotateZ(-30deg)
	}

	.hx-k3 {
		transform: rotateX(0deg) rotateZ(0deg)
	}

	.hx-k4 {
		transform: rotateX(30deg) rotateZ(30deg)
	}

	.hx-k5 {
		transform: rotateX(60deg) rotateZ(60deg)
	}

	.hx-k6 {
		transform: rotateX(90deg) rotateZ(90deg)
	}
</style>