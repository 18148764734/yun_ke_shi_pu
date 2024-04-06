<template>
	<view class="template-activity tn-safe-area-inset-bottom">

		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<view class="top-backgroup">
			<image src='https://resource.tuniaokj.com/images/index_bg/tuniao2.jpg' mode='widthFix' class='backgroud-image'>
			</image>
		</view>

		<swiper class="card-swiper" :circular="true" :autoplay="false" duration="500" interval="5000"
			previous-margin="170rpx" next-margin="170rpx" @change="cardSwiper" style="margin-top: -280rpx;">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="curIndex==index?'cur':''">
				<view class="tnphone-white-min swiper-item  wow fadeInLeft2">
					<view class="skin wow fadeInRight2">
						<view class="screen wow fadeInUp2">
							<view class="peak wow">
								<view class="sound"></view>
								<view class="lens"></view>
							</view>
							<view class="image-banner">
								<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
							</view>

						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>


		<view class="tn-margin-top-lg">
			<view class="nav_title--wrap">
				<view class="nav_title tn-cool-bg-color-15">
					<text class="tn-icon-star tn-padding-right-sm"></text>
					{{curBook.title}}
					<text class="tn-icon-star tn-padding-left-sm"></text>
				</view>
			</view>
		</view>

		<view class="content">
			{{curBook.content}}
		</view>

		<view class='tn-tabbar-height' style="margin: 10px;"></view>
		<book></book>


	</view>
</template>

<script>
	import book from "./../book.vue"
	export default {
		name: 'Discovery',
		components: {
			book
		},
		data() {
			return {
				curIndex: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://env-00jx4xgopeln.normal.cloudstatic.cn/%E4%B9%A6%E7%B1%8D/HDNJ.jpg',
					title: "皇帝内经",
					content: `  昔在黄帝，生而神灵，弱而能言，幼而徇齐，长而敦敏，成而登天。乃问于天师曰：余闻上古之人，春秋皆度百岁，而动作不衰；今时之人，年半百而动作皆衰者，时世异耶，人将失之耶。
岐伯对曰：上古之人，其知道者，法于阴阳，和于术数，食饮有节，起居有常，不妄作劳，故能形与神俱，而尽终其天年，度百岁乃去。今时之人不然也，以酒为浆，以妄为常，醉以入房，以欲竭其精，以耗散其真，不知持满，不时御神，务快其心，逆于生乐，起居无节，故半百而衰也。夫上古圣人之教下也，皆谓之虚邪贼风，避之有时，恬淡虚无，真气从之，精神内守，病安从来。是以志闲而少欲，心安而不惧，形劳而不倦，气从以顺，各从其欲，皆得所愿。故美其食，任其服，乐其俗，高下不相慕，其民故曰朴。是以嗜欲不能劳其目，淫邪不能惑其心，愚智贤不肖不惧于物，故合于道。所以能年皆度百岁，而动作不衰者，以其德全不危也。
帝曰：人年老而无子者，材力尽耶，将天数然也。
岐伯曰：女子七岁。肾气盛，齿更发长；二七而天癸至，任脉通，太冲脉盛，月事以时下，故有子；三七，肾气平均，故真牙生而长极；四七，筋骨坚，发长极，身体盛壮；五七，阳明脉衰，面始焦，发始堕；六七，三阳脉衰于上，面皆焦，发始白；七七，任脉虚，太冲脉衰少，天癸竭，地道不通，故形坏而无子也。
丈夫八岁，肾气实，发长齿更；二八，肾气盛，天癸至，精气溢写，阴阳和，故能有子；三八，肾气平均，筋骨劲强，故真牙生而长极；四八，筋骨隆盛，肌肉满壮；五八，肾气衰，发堕齿槁；六八，阳气衰竭于上，面焦，发鬓颁白；七八，肝气衰，筋不能动，天癸竭，精少，肾藏衰，形体皆极；八八，则齿发去。肾者主水，受五藏六府之精而藏之，故五藏盛，乃能写。今五藏皆衰，筋骨解堕，天癸尽矣。故发鬓白，身体重，行步不正，而无子耳。
帝曰：有其年已老而有子者何也。岐伯曰：此其天寿过度，气脉常通，而肾气有余也。此虽有子，男不过尽八八，女不过尽七七，而天地之精气皆竭矣。
帝曰：夫道者年皆百数，能有子乎。岐伯曰：夫道者能却老而全形，身年虽寿，能生子也。
黄帝曰：余闻上古有真人者，提挈天地，把握阴阳，呼吸精气，独立守神，肌肉若一，故能寿敝天地，无有终时，此其道生。中古之时，有至人者，淳德全道，和于阴阳，调于四时，去世离俗，积精全神，游行天地之间，视听八达之外，此盖益其寿命而强者也，亦归于真人。其次有圣人者，处天地之和，从八风之理，适嗜欲于世俗之间。无恚嗔之心，行不欲离于世，被服章，举不欲观于俗，外不劳形于事，内无思想之患，以恬愉为务，以自得为功，形体不敝，精神不散，亦可以百数。其次有贤人者，法则天地，象似日月，辨列星辰，逆从阴阳，分别四时，将从上古合同于道，亦可使益寿而有极时。`
				}, {
					id: 1,
					type: 'image',
					url: 'https://env-00jx4xgopeln.normal.cloudstatic.cn/%E4%B9%A6%E7%B1%8D/QJF.png',
					title: "千金方",
					content: `  夫清浊剖判，上下攸分，三才肇基，五行俶落，万物淳朴，无得而称。燧人氏出，观斗极以定方名，始有火化。伏羲氏作，因之而画八卦、立庖厨，滋味既兴， 瘵萌起。大圣神农氏悯黎元之多疾，遂尝百药以救疗之，犹未尽善。黄帝受命，创制九针，与方士岐伯、雷公之伦，备论经脉，旁通问难，详究义理，以为经论，故后世可得根据而畅焉。春秋之际，良医和缓，六国之时，则有扁鹊，汉有仓公，仲景，魏有华佗，并皆探赜索隐，穷幽洞微，用药不过二三，灸炷不逾七八，而疾无不愈者。晋宋以来，虽复名医间出，然治十不能愈五六，良由今人嗜欲太甚，立心不常，淫放纵逸，有阙摄养所致耳。余缅寻圣人设教，欲使家家自学，人人自晓。君亲有疾不能疗之者，非忠孝也。末俗小人，多行诡诈，倚傍圣教而为欺 ，遂令朝野士庶咸耻医术之名。多教子弟诵短文，枸小策，以求出身之道。医治之术，阙而弗论，吁可怪也。嗟乎！深乖圣贤之本意。吾幼遭风冷，屡造医门，汤药之资，罄尽家产。所以青衿之岁，高尚兹典；白首之年，未尝释卷。至于切脉诊候，采药合和，服饵节度，将息避慎，一事长于己者，不远千里伏膺取决。至于弱冠，颇觉有悟，是以亲邻国中外有疾厄者，多所济益。在身之患，断绝医门，故知方药本草不可不学。吾见诸方部帙浩博，忽遇仓猝，求检至难，比得方讫，疾已不救矣。呜呼！痛夭枉之幽厄，惜堕学之昏愚，乃博采群经，删裁繁重，务在简易，以为《备急千金要方》一部，凡三十卷。虽不能究尽病源，但使留意于斯者，亦思过半矣。以为人命至重，有贵千金，一方济之，德逾于此，故以为名也。未可传于士族，庶以贻厥私门。张仲景曰∶当今居世之士，曾不留神医药，精究方术，上以疗君亲之疾，下以救贫贱之厄，中以保身长全，以养其生。而但竞逐荣势，企踵权豪，孜孜汲汲，唯名利是务，崇饰其末，而忽弃其本，欲华其表而悴其内，皮之不存，毛将安附？进不能爱人知物，退不能爱躬知己，卒然遇邪风之气，婴非常之疾，患及祸至而后震栗。身居厄地，蒙蒙昧昧，戆若游魂，降志屈节，钦望巫祝，告究归天，束手受败。 百年之寿命，将至贵之重器，委付庸医，恣其所措，咄嗟喑呜，厥身已毙，神明消灭，变为异物，幽潜重泉，徒为涕泣。夫举世昏迷，莫能觉悟，自弃若是，夫何荣势之云哉。此之谓也。`
				}, {
					id: 2,
					type: 'image',
					url: 'https://env-00jx4xgopeln.normal.cloudstatic.cn/%E4%B9%A6%E7%B1%8D/SNBCJ.jpg',
					title: "神农百草经",
					content: `《记》曰：医不三世，不服其药。郑康成曰：慎物齐也。孔冲远引旧说云：三世者，一曰《黄帝针灸》，二曰《神农本草》，三曰素女脉诀。康成《周礼》注，亦曰：五药，草、木、虫、石、谷也。其治合之齐，则存乎神农子仪之术，是礼记注所谓慎物齐者，犹言治合之齐，指本草诸书而言也。冲远既引旧说，复疑其非郑义过矣。汉书引本草方术而艺文志阙载，贾公彦引中经簿，有子仪《本草经》一卷，不言出于神农。至隋经籍志，始载《神农本草》三卷，与今分上中下三品者相合，当属汉以来旧本。隋志又载雷公本草集注四卷，蔡邕本草七卷，今俱不传。自别录以后，累有损益升降，随时条记，或传合本文，不相别白，据陆元朗经典释文所引，则经文与《名医》所附益者，合并为一，其来旧矣。孙君伯渊偕其从子因《大观本草》黑白字书，厘正神农本经三卷，又据太平《御览》引经云，生山谷生川泽者，定为本文，其有预章，朱崖，常山，奉高，郡县名者，定为后人羼入。释本草者，以《吴普》本为最古。散见于诸书征引者，缀集之以补《大观本》所未备，疏通古义，系以考证，非澹雅之才，沈郁之思，未易为此也。古者协阴阳之和，宣赢缩之节，凡夫含声负气，以及倒生旁达，蠉飞蝡动之伦，胥尽其性，遇物能名，以达于利用生生之具，儒者宜致思焉。淮南王书曰：地黄主属骨，而甘草主生肉之药也。又曰大戟去水，葶苈愈张，用之不节，乃反为病。论衡曰：治风用风，治热用热，治边用蜜丹；潜夫论曰：治疾当真人参，反得支罗服，当得麦门冬，反蒸横麦，已而不识真，合而服之，病以浸剧，斯皆神农之绪言，惟其赡涉者博，故引类比方，悉符药论，后儒或忽为方技家言，渔猎所及，又是末师而非往古，甚至经典所载鸟兽草木，亦辗转而昧其名，不已慎乎！后汉书华陀传，《吴普》从陀学，依准陀疗，多所全济，陀以五禽之戏别传，又载魏明帝使普为禽戏，普以其法语诸医，疑其方术相传，别有奇文异数。今观普所释本草，则神农、黄帝、岐伯、雷公、桐君、医和、扁鹊，以及后代《名医》之说，靡不赅载，则其多所全济，由于稽考之勤，比验之密，而非必别有其奇文异数，信乎！非读三世书者，不可服其药也。世俗所传黄帝、神农、扁鹊之书，多为后人窜易，余愿得夫闳览博物者为之是正也。因孙君伯仲校定本草，而发其端，至其书考证精审，则读者宜自得之。`
				}, ]

			}
		},
		computed: {
			curBook() {
				return this.swiperList[this.curIndex]
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
			// cardSwiper
			cardSwiper(e) {
				this.curIndex = e.detail.current
				console.log(this.curIndex);
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		background-color: #fff;
		border-radius: 10px;
		width: 90vw;
		box-shadow: #d9d9d9 0 0 10px 2px;
		margin: 0 auto;
		padding: 10px;
		font-size: 18px;
		font-weight: 500;
	}

	.template-activity {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
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

	/* .tnphone-white-min 细边框*/
	.tnphone-white-min {
		width: 380rpx;
		height: 800rpx;
		border-radius: 40rpx;
		background: #E9E5F3;
		padding: 7rpx;
		display: table;
		color: #333;
		box-sizing: border-box;
		box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 0, 0, 0.15);
		margin: 70rpx auto;
		cursor: default;
		position: relative
	}

	.tnphone-white-min .skin {
		width: 100%;
		height: 100%;
		border-radius: 40rpx;
		background: #E9E5F3;
		padding: 10rpx;
	}

	.tnphone-white-min .screen {
		width: 100%;
		height: 100%;
		border-radius: 30rpx;
		background: #E9E5F3;
		position: relative;
		overflow: hidden
	}

	.tnphone-white-min .head {
		width: 100%;
		height: 90rpx;
		text-align: center;
		position: absolute;
		padding: 45rpx 15rpx 10rpx 15rpx;
	}

	.tnphone-white-min .peak {
		left: 22%;
		width: 56%;
		height: 27rpx;
		margin: -2rpx auto 0rpx;
		border-radius: 0 0 20rpx 20rpx;
		background: #E9E5F3;
		position: absolute
	}

	.tnphone-white-min .sound {
		width: 48rpx;
		height: 6rpx;
		border-radius: 15rpx;
		background: #555;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -24rpx;
		margin-top: -10rpx;
		box-shadow: 0rpx 4rpx 4rpx 0rpx #444 inset
	}

	.tnphone-white-min .lens {
		width: 6rpx;
		height: 6rpx;
		border-radius: 50%;
		background: #2c5487;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: 34rpx;
		margin-top: -10rpx
	}

	.tnphone-white-min .talk {
		width: 50%;
		height: 6rpx;
		border-radius: 15rpx;
		background: rgba(0, 0, 0, .3);
		position: absolute;
		bottom: 8rpx;
		left: 50%;
		margin-left: -25%
	}

	.tnphone-white-min .area-l,
	.tnphone-white-min .area-r {
		width: 70rpx;
		height: 16rpx;
		position: absolute;
		top: 6rpx
	}

	.tnphone-white-min .area-l {
		left: 0;
		text-align: center;
		font-size: 12rpx;
		line-height: 22rpx;
		text-indent: 10rpx;
		font-weight: 600;
		padding-left: 20rpx;
	}

	.tnphone-white-min .area-r {
		right: 0;
		text-align: center;
		font-size: 12rpx;
		line-height: 22rpx;
		text-indent: 10rpx;
		font-weight: 600;
		padding-right: 20rpx;
	}

	.tnphone-white-min .fa-feed {
		float: left;
		font-size: 12rpx !important;
		transform: rotate(-45deg);
		margin-top: 4rpx;
		margin-right: 8rpx
	}

	.tnphone-white-min .fa-battery-full {
		float: left;
		font-size: 12rpx !important;
		margin-top: 6rpx
	}

	.tnphone-white-min .fa-chevron-left {
		float: left;
		margin-top: 4rpx
	}

	.tnphone-white-min .fa-cog {
		float: right;
		margin-top: 4rpx
	}

	.tnphone-white-min .btn01 {
		width: 3rpx;
		height: 28rpx;
		border-radius: 3rpx 0 0 3rpx;
		background: #222;
		position: absolute;
		top: 105rpx;
		left: -3rpx
	}

	.tnphone-white-min .btn02 {
		width: 3rpx;
		height: 54rpx;
		border-radius: 3rpx 0 0 3rpx;
		background: #222;
		position: absolute;
		top: 160rpx;
		left: -3rpx
	}

	.tnphone-white-min .btn03 {
		width: 3rpx;
		height: 54rpx;
		border-radius: 3rpx 0 0 3rpx;
		background: #222;
		position: absolute;
		top: 230rpx;
		left: -3rpx
	}

	.tnphone-white-min .btn04 {
		width: 3rpx;
		height: 86rpx;
		border-radius: 0 3rpx 3rpx 0;
		background: #222;
		position: absolute;
		top: 180rpx;
		right: -3rpx
	}


	/* 顶部背景图 start */
	.top-backgroup {
		height: 450rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 667rpx;
			// z-index: -1;
		}
	}

	/* 顶部背景图 end */

	/* 轮播样机样式 start*/
	.card-swiper {
		height: 830rpx !important;
	}

	.card-swiper swiper-item {
		width: 260rpx !important;
		// left: 170rpx;
		// width: 380rpx !important;
		// left: 185rpx;
		box-sizing: border-box;
		padding: 0rpx 15rpx 90rpx 15rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		display: block;
		transform: scale(0.45);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: scale(0.65);
		transition: all 0.2s ease-in 0s;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 770rpx;
		// border: 1rpx solid red;
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
		background-color: #000;
		opacity: 0;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		margin: 0 8rpx !important;
		top: -80rpx;
		position: relative;
	}

	.spot.active {
		opacity: 0;
		width: 30rpx;
		background-color: #000;
	}

	/* 图标容器4 start */
	.tn-cool-color-icon4 {
		// background-image: -webkit-linear-gradient(135deg, #ED1C24, #FECE12);   16
		// background-image: linear-gradient(135deg, #ED1C24, #FECE12);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-fill-color: transparent;
	}

	.icon4 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 110rpx;
				height: 110rpx;
				font-size: 55rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
				box-shadow: 0px 10px 30px rgba(70, 23, 129, 0.12),
					0px -8px 40px rgba(255, 255, 255, 1),
					inset 0px -10px 10px rgba(70, 23, 129, 0.05),
					inset 0px 10px 20px rgba(255, 255, 255, 1);
			}
		}
	}

	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: transparent;

		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 42rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 组件导航列表 start*/
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0rpx 12rpx 0rpx;
		justify-content: space-between;

		/* 列表元素 start */
		.nav-list-item {
			padding: 95rpx 30rpx 5rpx 30rpx;
			border-radius: 12rpx;
			width: 45%;
			margin: 0 18rpx 40rpx;
			background-size: cover;
			background-position: center;
			position: relative;
			z-index: 99;

			/* 元素标题 start */
			.nav-link {
				font-size: 32rpx;
				text-transform: capitalize;
				padding: 0 0 10rpx 0;
				position: relative;

				.title {
					color: #FFFFFF;
					margin-top: 100rpx;
					text-align: center;
				}

				.join {
					color: #FFFFFF;
					margin-top: 20rpx;
					margin-bottom: 40rpx;
					text-align: center;
				}
			}

			/* 元素标题 end */

			/* 元素图标 start */
			.icon {
				font-variant: small-caps;
				position: absolute;
				top: 60rpx;
				right: 50rpx;
				left: 37%;
				width: 90rpx;
				height: 90rpx;
				line-height: 90rpx;
				margin: 0;
				padding: 0;
				display: inline-flex;
				text-align: center;
				justify-content: center;
				vertical-align: middle;
				font-size: 50rpx;
				color: #FFFFFF;
				white-space: nowrap;
				opacity: 0.9;
				background-color: rgba(0, 0, 0, 0.05);
				background-size: cover;
				background-position: 50%;
				border-radius: 5000rpx;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg2.png);
				}
			}

			/* 元素图标 end */
		}

		/* 列表元素 end */
	}

	/* 组件导航列表 end*/
</style>