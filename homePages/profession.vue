<template>
  <view class="template-business tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
        <text class="icon tn-icon-left"></text>
        <text class="icon tn-icon-home-capsule-fill"></text>
      </view>
    </tn-nav-bar>

    <!-- 顶部 -->
    <view>
      <view
        class="king-list"
        :style="{ paddingTop: vuex_custom_bar_height + 'px' }"
      >
        <view class="king-icon">
          <text
            class="tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">均衡饮食</text>
        </view>
        <view class="king-item tn-color-indigo tn-icon-science">
          <view
            class="resume2 tn-main-gradient-blue--light tn-shadow-blur"
            style="padding: 20rpx 20rpx"
          >
            <text class="tn-margin-top-sm">
              摄取来自各种食物类别的营养是保持身体健康的关键。确保每天摄入足够的蔬菜、水果、全谷类、蛋白质和健康脂肪。
            </text>
          </view>
        </view>

        <view class="king-icon">
          <text
            class="tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">适量运动：</text>
        </view>
        <view class="king-item tn-color-indigo tn-icon-science">
          <view
            class="resume2 tn-main-gradient-blue--light tn-shadow-blur"
            style="padding: 20rpx 20rpx"
          >
            <text class="tn-margin-top-sm">
              每天进行适度的运动有助于维持身体健康和心理健康。可以选择散步、跑步、瑜伽等各种形式的运动。
            </text>
          </view>
        </view>
        <view class="king-item tn-color-indigo tn-icon-science">
          <view
            class="resume2 tn-main-gradient-blue--light tn-shadow-blur"
            style="padding: 20rpx 20rpx"
          >
            <text class="tn-margin-top-sm"> 保持充足的睡眠对于身体和大脑的功能至关重要。成年人通常需要7-9小时的睡眠时间。 </text>
          </view>
        </view>
        <view class="king-item tn-color-indigo tn-icon-science">
          <view
            class="resume2 tn-main-gradient-blue--light tn-shadow-blur"
            style="padding: 20rpx 20rpx"
          >
            <text class="tn-margin-top-sm">
              长期处于高压力状态下会对身体健康产生负面影响。学会管理压力，采取放松的方式，如冥想、呼吸练习或者艺术创作
            </text>
          </view>
        </view>

        <view class="king-icon">
          <text
            class="tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"
          ></text>
          <text class="tn-text-xl tn-margin-left">多喝水：</text>
        </view>
        <view class="king-item tn-color-indigo tn-icon-science">
          <view
            class="resume2 tn-main-gradient-blue--light tn-shadow-blur"
            style="padding: 20rpx 20rpx"
          >
            <text class="tn-margin-top-sm">
              保持身体水分平衡对于健康至关重要。每天饮用足够的水有助于维持身体的正常功能，促进新陈代谢和排毒。
            </text>
          </view>
        </view>

        

        
        <view class='king-item tn-color-indigo tn-icon-science'>
          <view class="resume text-lg">
            <text>多吃水果</text>
            <text class='fr'>1299</text>
          </view>
          <view class="bg-img-cont margin-top margin-bottom-sm img-solid radius"
            style="background-image:url(https://www.foodiesfeed.com/wp-content/uploads/2023/08/red-apple-macro.jpg);">
          </view>
          <view class="resume2">
            <text>苹果富含维生素C、维生素K、维生素B6以及各种矿物质如钾和铜。这些营养物质有助于维持身体的健康和功能。</text>
          </view>
        </view>

        <view class="king-icon">
          <text class='tn-icon-tag tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs'></text>
          <text class='tn-text-xl tn-margin-left'>个性标签</text>
        </view>
        <view class='king-item tn-color-indigo tn-icon-science'>
          <view class="resume">
            
            <view class="tn-tag-content tn-text-justify">
              <view v-for="(item, index) in tagList" :key="index" class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                <text class="tn-tag-content__item--prefix">#</text> {{ item.title }}
              </view>
            </view>


          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import template_page_mixin from "@/libs/mixin/template_page_mixin.js";
export default {
  name: "TemplateBusiness",
  mixins: [template_page_mixin],
  data() {
    return {
      tagList: [
        {
          color: "red",
          title: "萌新求带",
        },
        {
          color: "cyan",
          title: "简约美",
        },
        {
          color: "blue",
          title: "开心吃货",
        },
        {
          color: "green",
          title: "爱花草",
        },
        {
          color: "orange",
          title: "产品经理",
        },
        {
          color: "purplered",
          title: "手工王子",
        },
        {
          color: "purple",
          title: "创意设计",
        },
        {
          color: "brown",
          title: "腹黑",
        },
        {
          color: "yellowgreen",
          title: "水果控",
        },
        {
          color: "lime",
          title: "bug多多",
        },
        {
          color: "grey",
          title: "蠢萌蠢萌",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
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

/* 简历内容 */
.king-list {
  display: block;
  background-color: #ffffff;
}

.king-list .king-icon {
  width: 100%;
  text-align: left;
  padding: 20rpx 0 20rpx 37rpx;
  font-size: 26rpx;
  color: #888;
  display: block;
}

.king-list > .king-item {
  padding: 30rpx 30rpx 30rpx 120rpx;
  position: relative;
  display: block;
  z-index: 0;
}

.king-list > .king-item::after {
  content: "";
  display: block;
  position: absolute;
  width: 1rpx;
  background-color: #e6e6e6;
  left: 60rpx;
  height: 100%;
  top: 0;
  z-index: 8;
}

.king-list > .king-item::before {
  display: block;
  position: absolute;
  top: 36rpx;
  z-index: 9;
  background-color: #ffffff;
  width: 50rpx;
  height: 50rpx;
  text-align: center;
  border: none;
  line-height: 50rpx;
  left: 36rpx;
}

/* 名片微调 */
.img-solid {
  border: 2rpx solid #eee;
}

.share-img {
  position: fixed;
  /* padding: 10rpx; */
  width: 100rpx;
  height: 100rpx;
  /* top: 680rpx; */
  bottom: 200rpx;
  right: 20rpx;
  z-index: 1024;
  opacity: 0.8;
  box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
  border: none;
  border: 6rpx solid rgba(255, 255, 255, 0);
}

.resume {
  display: flex;
  justify-content: space-between;
  padding-top: 10rpx;
  border-radius: 6rpx;
  color: #666;
  line-height: 1.6;
}

.resume + .resume {
  margin-top: 20rpx;
}

.resume2 {
  padding-top: 10rpx;
  border-radius: 6rpx;
  display: block;
  color: #666;
  line-height: 1.6;
  text-align: justify;
}

/* 间隔线 start*/
.tn-strip-bottom {
  width: 100%;
  border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
}
/* 间隔线 end*/

.bg-img-cont {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 350rpx;
  margin: 20rpx 0;
  border-radius: 8rpx;
}

// .button-no {
//   border: none;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0);
// }

/* 标签内容 start*/
.tn-tag-content {
  &__item {
    display: inline-block;
    line-height: 45rpx;
    padding: 10rpx 30rpx;
    margin: 0rpx 20rpx 25rpx 0rpx;

    &--prefix {
      padding-right: 10rpx;
    }
  }
}
/* 标签内容 end*/

.see {
  display: flex;
  justify-content: space-between;
  padding-top: 10rpx;
  border-radius: 6rpx;
  color: #666;
  line-height: 1.6;
}
</style>
