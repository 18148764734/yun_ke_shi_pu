<template>
	<view class="template-advertise">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back tn-navbg' @click="goBack">
				<text class='icon tn-icon-home-smile-fill'></text>
			</view>
		</tn-nav-bar>

		<!-- <view :style="{paddingTop: `${topInfo.height}px`}"></view> -->

		<view class="banner">

			<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="5000" @change="cardSwiper">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item image-banner">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					</view>
					<view class="swiper-item-text">
						<view class="tn-text-xxl tn-text-bold tn-color-white">{{item.title}}</view>
						<view class="tn-text-bold tn-color-white tn-padding-top-xs" style="font-size: 60rpx;">{{item.name}}</view>
						<view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm">{{item.text}}
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="indication">
				<block v-for="(item,index) in swiperList" :key="index">
					<view class="spot" :class="cardCur==index?'active':''"></view>
				</block>
			</view>
		</view>
		<!-- <view class="tn-padding" >
      <view class="tn-text-bold tn-text-xl tn-padding-top-sm">
        创新设计·全球首发
      </view>
      <view class="tn-padding-top-sm">
        <text class="tn-color-black tn-text-bold">北北</text>
        <text class="tn-color-grey tn-padding-left-sm">2022-05-21 10:03:45</text>
        <text class="tn-padding-left tn-color-indigo--dark" >投诉</text>
      </view>
    </view> -->

		<view class="adver-wrap tn-bg-white">
			<view class="tn-flex tn-flex-row-between tn-padding-top-lg" @tap="showLandscape">
				<view class="tn-flex-3 tn-padding tn-margin-left-sm">
					<view class="tn-flex">
						<view class="tn-flex tn-flex-row-center tn-flex-col-center">
							<view class="tn-padding-right tn-text-ellipsis tn-text-left">
								<view class="tn-padding-right tn-color-black tn-text-bold tn-text-xxl">
									食谱编辑
								</view>
								<view class="tn-padding-right tn-padding-top tn-text-df">创作无限可能</view>
							</view>
						</view>
					</view>
				</view>

				<view class="tn-flex-1 justify-content-item tn-padding tn-text-center">
					<view class="">
						<text class="tn-icon-qr-code" style="font-size: 70rpx;"></text>
					</view>
					<view class=" tn-padding-top-xs">
						探 索
					</view>
				</view>
			</view>

			<view class="detail-img tn-padding">
				<uni-forms :modelValue="addData">
					<uni-forms-item label="标题" name="name">
						<uni-easyinput type="text" v-model="addData.title" placeholder="请输入标题" />
					</uni-forms-item>
					<view class="divider" />
					<uni-forms-item label="作者姓名" name="age">
						<uni-easyinput type="text" disabled v-model="addData.author" placeholder="请输入标题" />
					</uni-forms-item>
					<view class="divider" />
					<uni-forms-item name="needs" label="食材">
						<view class="item" v-for="(item,index) in addData.needs" :key="index">
							<uni-easyinput class="key" type="text" v-model="item.key" placeholder="请输入食材名" />
							<uni-easyinput class="value" type="text" v-model="item.value" placeholder="请输入用量" />
						</view>
						<button class="button" type="primary" @click="addNeeds">添加</button>
						<button class="button" type="warn" @click="delNeeds">删除</button>
					</uni-forms-item>
					<view class="divider" />
					<uni-forms-item name="steps" label="步骤">
						<view class="item" v-for="(item,index) in addData.steps" :key="index">
							<text class="key">{{(index+1)+"、"}}</text>
							<uni-easyinput class="value" type="textarea" v-model="addData.steps[index]" placeholder="请输入步骤" />
						</view>
						<button class="button" type="primary" @click="addSteps">添加</button>
						<button class="button" type="warn" @click="delSteps">删除</button>
					</uni-forms-item>
					<view class="divider" />
					<uni-forms-item name="swiperImgs" label="图片素材">
						<image v-for="(item,index) in addData.swiperImgs" :src="item" :key="index"></image>
						<button @click="uploadImg" type="primary">上传图片</button>
					</uni-forms-item>
					<view class="divider" />
					<uni-forms-item name="classify" label="分类">
						<uni-data-select v-model="addData.classify" :localdata="range"></uni-data-select>
					</uni-forms-item>
					<view class="divider" />
				</uni-forms>
				<view style="display: flex;justify-content: center;">
					<button class="button" @click="addArticle()">发布食谱</button>
				</view>
			</view>

		</view>


	</view>
</template>

<script>
	const db = uniCloud.database();
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'templateAdvertise',
		mixins: [template_page_mixin],
		data() {
			return {
				range: [{
						value: "绝味美食",
						text: "绝味美食"
					},
					{
						value: "营养美食",
						text: "营养美食"
					},
					{
						value: "低卡美食",
						text: "低卡美食"
					},
				],
				addData: {
					title: "",
					author: uni.getStorageSync("userName"),
					authorId: "1",
					needs: [{
							key: "清水",
							value: "500ml"
						},
						{
							key: "花生油",
							value: "适量"
						},
						{
							key: "盐",
							value: "10g"
						},
						{
							key: "姜末",
							value: "10g"
						},
						{
							key: "葱花",
							value: "适量"
						},
						{
							key: "小米椒",
							value: "适量"
						},
					],
					steps: [
						'洗净去皮，切滚刀块，放入清水中浸泡，可以防止氧化变黑',
						'斩小块，清水洗净，浸泡一小时，泡出血水，中间换两次水,焯好后直接捞入砂锅，没有砂锅的用普通锅即可，水要适量增加一些，',
						'起锅热油，放入草鱼块翻炒3分钟，倒入开水没过鱼肉，煮5分钟。',
						'砂锅加水烧开，放入排骨，放入葱姜，中火煲一个半小时，可以在焯排骨的时候同时开火，焯好后直接捞入砂锅，没有砂锅的用普通锅即可，水要适量增加一些，尽量中间不加水',
						'中火继续煲半个小时左右，用筷子插一下山药，一插即透即可，不要煮时间太长，山药碎了就不好了',
						'起锅前只需要加入盐调味即可。撒上葱花，出锅。焯好后直接捞入砂锅，没有砂锅的用普通锅即可，水要适量增加一些，',
						'肉酥骨烂，山药吸收了排骨的鲜味，不过最好喝的是汤，赶快来一碗吧！',
					],
					swiperImgs: [],
					classify: "",
				},
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					title: 'BUG再多',
					name: '也别忘了点杯奶茶',
					text: '放松一下哦',
					url: 'https://resource.tuniaokj.com/images/shop/cup1.jpg',
				}, {
					id: 1,
					type: 'image',
					title: '韵科食谱',
					name: '期待你的新作品',
					text: '如果你也有不错的作品',
					url: 'https://resource.tuniaokj.com/images/swiper/read.jpg',
				}],

				show1: false,

				show2: false,
				maskCloseable: true,

				topInfo: {
					height: 0,
				},
				topInfoTranslateY: 0,
				prevScrollTop: 0
			}
		},
		onLoad() {

		},
		onReady() {
			this.getTopInfoRect()
		},
		onPageScroll(e) {
			this.handlePageScroll(e.scrollTop)
		},
		methods: {
			uploadImg() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						console.log(res);
						console.log(this.addData.title + (this.addData.swiperImgs.length - 1 || 0));

						uniCloud.uploadFile({
							cloudPath: (this.addData.title + (this.addData.swiperImgs.length || 0)) + '.png',
							filePath: res.tempFilePaths[0],
							success: (res) => {
								console.log(res);
								this.addData.swiperImgs.push("https://env-00jx4xgopeln.normal.cloudstatic.cn" + res.fileID
									.substring(res.fileID.lastIndexOf("/"), res.fileID.length))
							},
							fail(err) {
								console.log(err);
							}
						})

					},
					fail(err) {
						console.log(err)
					}
				})

			},
			addArticle() {
				db.collection("article").add(this.addData).then(async (res) => {
					// res 为数据库查询结果
					let res1 = await db.collection("article").where({
						_id: res.result.id
					}).get();
					uni.showToast({
						title:"发布成功！"
					})
					console.log(res1);
				}).catch((err) => {
					uni.showToast({
						title:"发布失败!",
						icon:'error'
					})
					console.log(err.message)
				});
			},
			delSteps() {
				this.addData.steps.pop()
			},
			addSteps() {
				this.addData.steps.push("")
			},
			delNeeds() {
				this.addData.needs.pop()
			},
			addNeeds() {
				this.addData.needs.push({
					key: "",
					value: ""
				})
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// 预览作者图片
			previewQRCodeImage() {
				wx.previewImage({
					urls: ['https://resource.tuniaokj.com/images/advertise/qrcode.jpg']
				})
			},
			// 获取顶部销售信息容器相关信息
			getTopInfoRect() {
				this._tGetRect('#top-info').then((res) => {
					if (!res) {
						setTimeout(() => {
							this.getTopInfoRect()
						}, 50)
						return
					}
					this.topInfo.height = res.height
				})
			},
			// 处理页面滚动事件
			handlePageScroll(scrollTop) {
				if (this.prevScrollTop > scrollTop) {

					// 内容下滑，即手指从下往上滚
					this.topInfoTranslateY = 0
				} else {
					// 内容上滑，即手指从上往下滚
					if (scrollTop > this.topInfo.height) {
						this.topInfoTranslateY = this.topInfo.height
					}

				}

				this.prevScrollTop = scrollTop
			},

			// 弹出模态框
			showModal(event) {
				this.openModal()
			},
			// 打开模态框
			openModal() {
				this.show1 = true
			},

			// 弹出压屏窗
			showLandscape() {
				this.openLandscape()
			},
			// 打开压屏窗
			openLandscape() {
				this.show2 = true
			},
			// 关闭压屏窗
			closeLandscape() {
				this.show2 = false
			},

			// 跳转到韵科食谱UI
			navTuniaoUI() {
				uni.navigateToMiniProgram({
					appId: 'wxf3d81a452b88ff4b'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.button {
		display: inline-block;
		width: 40%;
		margin: 10px;
	}

	.divider {
		position: relative;
		left: 10%;
		height: 10px;
		width: 80%;
		border-top: #e3e3e3 solid 1px;
		margin-bottom: 12px;
	}

	.item {
		display: flex;
		margin-bottom: 10px;
		background-color: #e2e299;
		border-radius: 10px;
		padding: 5px;

		.key {
			margin-right: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.value {}
	}

	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 36%;
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

	}

	/* 渐变*/
	.tn-navbg {
		margin: 0;
		color: #fff;
		background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
		/* background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b); */
		/* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */
		/* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
		background-size: 500% 500%;
		animation: gradientBG 15s ease infinite;
	}

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

	/* 内容 */
	.adver-wrap {
		position: relative;
		z-index: 1;
		// padding: 20rpx 30rpx;
		margin-top: 700rpx;
		border-radius: 80rpx 80rpx 0 0;
	}

	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}


	/* 用户头像 start */
	.user-image {
		width: 90rpx;
		height: 90rpx;
		position: relative;
	}

	.user-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	/* 富文本图示意 start */
	.detail-img {
		z-index: -1;
		padding-bottom: 40rpx;

		image {
			width: 100%;
			margin: 20rpx 0;
			// height: 3373rpx;
			// z-index: -1;
		}
	}


	.banner {
		position: fixed;
		top: 0;
		width: 100%;
		transition: all 0.25s ease-out;
		will-change: transform;
		z-index: -1;
	}

	/* 轮播视觉差 start */
	.card-swiper {
		height: 800rpx !important;
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
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
		will-change: transform;
	}

	.card-swiper swiper-item .swiper-item-text {
		margin-top: -320rpx;
		width: 100%;
		display: block;
		height: 50%;
		border-radius: 10rpx;
		transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		margin-top: -380rpx;
		width: 100%;
		transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
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
		background-color: #FFFFFF;
		opacity: 0.6;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -150rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #FFFFFF;
	}

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		bottom: 0;
		width: 100%;
		transition: all 0.25s ease-out;
		will-change: transform;
		z-index: 100;
	}
</style>