<template>
	<view class="start-index">
		<view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<home ref="home"></home>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<activity ref="activity"></activity>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<mine ref="mine"></mine>
			</scroll-view>
		</view>

		<tn-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#838383" inactiveColor="#AAAAAA"
			activeIconColor="#FBBD12" :animation="true" :safeAreaInsetBottom="true" @change="switchTabbar"></tn-tabbar>
	</view>
</template>

<script>
	import Home from './home/home.vue'
	import Activity from './activity/activity.vue'
	import Mine from './mine/mine.vue'

	export default {
		components: {
			Home,
			Activity,
			Mine
		},
		data() {
			return {
				// 底部tabbar菜单数据
				tabbarList: [{
						title: '首页',
						activeIcon: '/static/tabbar/home_tnnew.png',
						inactiveIcon: '/static/tabbar/home_tn.png',
						index: 0,
					},
					{
						title: '广场',
						activeIcon: 'menu-circle',
						inactiveIcon: 'rocket',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true,
						index: 2,
					},
					{
						title: '我的',
						activeIcon: '/static/tabbar/mine_tnnew.png',
						inactiveIcon: '/static/tabbar/mine_tn.png',
						index: 4,
					}
				],
				// tabbar当前被选中的序号
				currentIndex: 0,
				// 自定义底栏对应页面的加载情况
				tabberPageLoadFlag: []
			}
		},
		async onLoad(options) {
			const index = Number(options.index || 0)
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
				return index === tabbar_index;
			})
			this.switchTabbar(index)
		},
		methods: {
			// 切换导航
			switchTabbar(index) {
				this._switchTabbarPage(index)
				if (index !== 2) {
					this.$refs?.circleRef?.stopAllVideo()
				}
			},


			// 导航页面滚动到底部
			tabbarPageScrollLower(e) {
				if (this.currentIndex === 3) {
					this.$refs.preferredRef.getRandomData && this.$refs.preferredRef.getRandomData()
				}
			},

			// 切换导航页面
			_switchTabbarPage(index) {
				const selectPageFlag = this.tabberPageLoadFlag[index]
				if (selectPageFlag === undefined) {
					return
				}
				if (selectPageFlag === false) {
					this.tabberPageLoadFlag[index] = true
				}
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>