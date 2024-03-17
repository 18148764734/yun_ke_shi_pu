<template>
  <view class="template-product tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class="tn-custom-nav-bar__back" @click="goBack">
        <text class="icon tn-icon-left"></text>
        <text class="icon tn-icon-home-capsule-fill"></text>
      </view>
    </tn-nav-bar>

    <swiper
      class="card-swiper"
      :circular="true"
      :autoplay="true"
      duration="500"
      interval="5000"
      @change="cardSwiper"
    >
      <swiper-item
        v-for="(item, index) in swiperList"
        :key="index"
        :class="cardCur == index ? 'cur' : ''"
      >
        <view class="swiper-item image-banner">
          <image
            :src="item.url"
            mode="aspectFill"
            v-if="item.type == 'image'"
          ></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="indication">
      <block v-for="(item, index) in swiperList" :key="index">
        <view class="spot" :class="cardCur == index ? 'active' : ''"></view>
      </block>
    </view>

    <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xxl">
          红焖羊肉胡萝卜
        </view>
      </view>
      <view class="tn-flex tn-flex-row-between tn-margin-top">
        <view class="justify-content-item tn-text-bold tn-color-purplered">
          <text class="" style="font-size: 50rpx">免费分享</text>
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

      <view class="justify-content-item tn-color-gray">
        羊肉 500克 <br />
        胡萝卜 <br />
        2 根(350克左右) <br />
        大葱 50克 <br />
        姜片 10克 <br />
        冰糖 40克 黄豆酱油 30克 <br />
        料酒 10克 <br />
        各种香料 见步骤图 <br />
        盐 3克
      </view>
      <view class="justify-content-item tn-text-bold tn-text-xl">
        做法步骤
      </view>
      <view class="justify-content-item tn-color-gray">
        1、羊肉切块(大小随意，我切的大约为2.5厘米见方)，因为孩子不喜欢肥的和筋膜类，所以我用的羊腿肉，瘦肉多。当然也可以选其他部位哈。
        2、胡萝卜去皮切滚刀块。 <br />
        3、羊肉凉水下锅煮开，撇去浮沫 <br />
        4、捞出备用 <br />
        5、胡萝卜过油炸一下 <br />
        6、炸至焦边且变蔫儿，备用 <br />
        7、大葱切大段，姜切大片，以方便之后捞出。
        8、炒锅上火烧热，加少量底油，放入羊肉、大葱、姜和冰糖一起炒，转小火多炒一会儿，至肉有焦边，且冰糖几乎融化。
        <br />
        9、加酱油、料酒，继续炒一会儿。
        酱油我用的龙和宽黄豆酱油，没有的话用别的，或红烧酱油，颜色自己掌握一下，因为各种酱油颜色不一样，所以自己调整一下用量。
        <br />
        11、参考图上香料的用量：草果(砸裂开)、肉蔻、桂皮、陈皮、小丁香、花椒、八角、小茴香。
        <br />
        12、加入肉锅中，且加入适量开水，小火炖40分钟左右。
        🌹这时我换用了小砂锅。
        <br />
        13、加入胡萝卜和盐继续炖20分钟。
        <br />
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
        <view class="justify-content-item tn-text-bold tn-text-xl"> 标签 </view>
      </view>
    </view>

    <view class="">
      <view class="tn-tag-content tn-margin tn-text-justify">
        <view
          v-for="(item, index) in tagList"
          :key="index"
          class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
          :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]"
        >
          <text class="tn-tag-content__item--prefix">#</text> {{ item.title }}
        </view>
      </view>
    </view>

    <!-- 边距间隔 -->
    <view class="tn-strip-bottom"></view>

    <!-- 图标logo/头像 -->
    <view
      class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin"
      @click="tn('/preferredPages/shop')"
    >
      <view class="justify-content-item">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view class="logo-pic tn-shadow">
            <view class="logo-image">
              <view
                class="tn-shadow-blur"
                style="
                  background-image: url('https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg');
                  width: 110rpx;
                  height: 110rpx;
                  background-size: cover;
                "
              >
              </view>
            </view>
          </view>
          <view class="tn-padding-right tn-color-black">
            <view
              class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold"
            >
              小美
            </view>
            <view
              class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-padding-left-sm"
            >
              <text
                class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
              ></text>
              <text
                class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
              ></text>
              <text
                class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
              ></text>
              <text
                class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
              ></text>
              <text
                class="tn-color-purplered tn-icon-flower-fill tn-text-lg"
              ></text>
              <text class="tn-color-brown tn-padding-left-xs tn-text-bold"
                >5.0</text
              >
            </view>
          </view>
        </view>
      </view>
      <view class="justify-content-item tn-flex-row-center">
        <view
          class="tn-cool-bg-color-15 tn-padding-xs tn-color-white tn-round tn-shadow-blur"
        >
          <text class="tn-padding-left-xs">查看更多</text>
          <text class="tn-icon-send-fill tn-padding-xs"></text>
        </view>
      </view>
    </view>

    <!-- 边距间隔 -->
    <view class="tn-strip-bottom"></view>

    <view class="tn-margin-top-sm">
      <tn-sticky :offsetTop="10" :customNavHeight="vuex_custom_bar_height">
        <tn-tabs
          :list="fixedList"
          :current="current"
          :isScroll="false"
          activeColor="#000"
          :bold="true"
          :fontSize="32"
          :badgeOffset="[20, 50]"
          @change="tabChange"
        ></tn-tabs>
      </tn-sticky>
    </view>

    <!-- 推荐 -->
    <view class="" v-if="current == 0">
      <view class="">
        <view class="nav_title--wrap">
          <view class="nav_title tn-cool-bg-color-15">
            <text
              class="tn-icon-relation tn-padding-right-sm tn-text-xxl"
            ></text>
            <text class="tn-text-xl">专属定制 · 食谱推荐</text>
            <text
              class="tn-icon-relation tn-padding-left-sm tn-text-xxl"
            ></text>
          </view>
        </view>
      </view>

      <!-- 商品1 start-->
      <view class="tn-flex tn-flex-wrap tn-margin-sm">
        <block v-for="(item, index) in content" :key="index">
          <view class="" style="width: 50%">
            <view class="tn-blogger-content__wrap">
              <view
                class="image-picbook"
                :style="'background-image:url(' + item.mainImage + ')'"
              >
                <view class="image-book"> </view>
              </view>

              <view
                class="tn-blogger-content__label tn-text-justify tn-padding-sm"
              >
                <text class="tn-blogger-content__label__desc">{{
                  item.desc
                }}</text>
              </view>

              <view
                class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm"
              >
                <view class="justify-content-item tn-flex tn-flex-col-center">
                  <view>
                    <view class="">
                      <text
                        class="tn-blogger-content__count-icon tn-color-purplered"
                        style="font-size: 24rpx"
                        >￥</text
                      >
                      <text
                        class="tn-padding-right-sm tn-text-bold tn-color-purplered"
                        style="font-size: 38rpx"
                        >{{ item.collectionCount }}</text
                      >
                      <!-- <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                      <text class="tn-padding-right-sm">{{ item.commentCount }}</text> -->
                      <text
                        class="tn-color-gray tn-text-sm"
                        style="font-size: 24rpx"
                        >{{ item.likeCount }} 人购买</text
                      >
                    </view>
                  </view>
                </view>
                <!-- <view class="justify-content-item tn-text-center">
                  <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                    <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
                  </view>
                </view> -->
              </view>
            </view>
          </view>
        </block>
      </view>
      <!-- 商品1 end-->
    </view>

    <!-- 同款 -->
    <view class="" v-if="current == 1">
      <view class="">
        <view class="nav_title--wrap">
          <view class="nav_title tn-cool-bg-color-10">
            <text
              class="tn-icon-relation tn-padding-right-sm tn-text-xxl"
            ></text>
            <text class="tn-text-xl">好物推荐 · 商品同款</text>
            <text
              class="tn-icon-relation tn-padding-left-sm tn-text-xxl"
            ></text>
          </view>
        </view>
      </view>

      <!-- 商品1 start-->
      <view class="tn-flex tn-flex-wrap tn-margin-sm">
        <block v-for="(item, index) in content2" :key="index">
          <view class="" style="width: 50%">
            <view class="tn-blogger-content__wrap">
              <view
                class="image-picbook"
                :style="'background-image:url(' + item.mainImage + ')'"
              >
                <view class="image-book"> </view>
              </view>

              <view
                class="tn-blogger-content__label tn-text-justify tn-padding-sm"
              >
                <text class="tn-blogger-content__label__desc">{{
                  item.desc
                }}</text>
              </view>

              <view
                class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm"
              >
                <view class="justify-content-item tn-flex tn-flex-col-center">
                  <view>
                    <view class="">
                      <text
                        class="tn-blogger-content__count-icon tn-color-purplered"
                        style="font-size: 24rpx"
                        >￥</text
                      >
                      <text
                        class="tn-padding-right-sm tn-text-bold tn-color-purplered"
                        style="font-size: 38rpx"
                        >{{ item.collectionCount }}</text
                      >
                      <!-- <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                      <text class="tn-padding-right-sm">{{ item.commentCount }}</text> -->
                      <text
                        class="tn-color-gray tn-text-sm"
                        style="font-size: 24rpx"
                        >{{ item.likeCount }} 人购买</text
                      >
                    </view>
                  </view>
                </view>
                <!-- <view class="justify-content-item tn-text-center">
                  <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                    <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
                  </view>
                </view> -->
              </view>
            </view>
          </view>
        </block>
      </view>
      <!-- 商品1 end-->
    </view>

    <!-- 热卖 -->
    <view class="" v-if="current == 2">
      <view class="">
        <view class="nav_title--wrap">
          <view class="nav_title tn-cool-bg-color-6">
            <text
              class="tn-icon-relation tn-padding-right-sm tn-text-xxl"
            ></text>
            <text class="tn-text-xl">好物推荐 · 商品热卖</text>
            <text
              class="tn-icon-relation tn-padding-left-sm tn-text-xxl"
            ></text>
          </view>
        </view>
      </view>

      <!-- 商品1 start-->
      <view class="tn-flex tn-flex-wrap tn-margin-sm">
        <block v-for="(item, index) in content3" :key="index">
          <view class="" style="width: 50%">
            <view class="tn-blogger-content__wrap">
              <view
                class="image-picbook"
                :style="'background-image:url(' + item.mainImage + ')'"
              >
                <view class="image-book"> </view>
              </view>

              <view
                class="tn-blogger-content__label tn-text-justify tn-padding-sm"
              >
                <text class="tn-blogger-content__label__desc">{{
                  item.desc
                }}</text>
              </view>

              <view
                class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm"
              >
                <view class="justify-content-item tn-flex tn-flex-col-center">
                  <view>
                    <view class="">
                      <text
                        class="tn-blogger-content__count-icon tn-color-purplered"
                        style="font-size: 24rpx"
                        >￥</text
                      >
                      <text
                        class="tn-padding-right-sm tn-text-bold tn-color-purplered"
                        style="font-size: 38rpx"
                        >{{ item.collectionCount }}</text
                      >
                      <!-- <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                      <text class="tn-padding-right-sm">{{ item.commentCount }}</text> -->
                      <text
                        class="tn-color-gray tn-text-sm"
                        style="font-size: 24rpx"
                        >{{ item.likeCount }} 人购买</text
                      >
                    </view>
                  </view>
                </view>
                <!-- <view class="justify-content-item tn-text-center">
                  <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                    <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
                  </view>
                </view> -->
              </view>
            </view>
          </view>
        </block>
      </view>
      <!-- 商品1 end-->
    </view>

    <!-- 爆款 -->
    <view class="" v-if="current == 3">
      <view class="">
        <view class="nav_title--wrap">
          <view class="nav_title tn-cool-bg-color-2">
            <text
              class="tn-icon-relation tn-padding-right-sm tn-text-xxl"
            ></text>
            <text class="tn-text-xl">好物推荐 · 商品爆款</text>
            <text
              class="tn-icon-relation tn-padding-left-sm tn-text-xxl"
            ></text>
          </view>
        </view>
      </view>

      <!-- 商品1 start-->
      <view class="tn-flex tn-flex-wrap tn-margin-sm">
        <block v-for="(item, index) in content4" :key="index">
          <view class="" style="width: 50%">
            <view class="tn-blogger-content__wrap">
              <view
                class="image-picbook"
                :style="'background-image:url(' + item.mainImage + ')'"
              >
                <view class="image-book"> </view>
              </view>

              <view
                class="tn-blogger-content__label tn-text-justify tn-padding-sm"
              >
                <text class="tn-blogger-content__label__desc">{{
                  item.desc
                }}</text>
              </view>

              <view
                class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm"
              >
                <view class="justify-content-item tn-flex tn-flex-col-center">
                  <view>
                    <view class="">
                      <text
                        class="tn-blogger-content__count-icon tn-color-purplered"
                        style="font-size: 24rpx"
                        >￥</text
                      >
                      <text
                        class="tn-padding-right-sm tn-text-bold tn-color-purplered"
                        style="font-size: 38rpx"
                        >{{ item.collectionCount }}</text
                      >
                      <!-- <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                      <text class="tn-padding-right-sm">{{ item.commentCount }}</text> -->
                      <text
                        class="tn-color-gray tn-text-sm"
                        style="font-size: 24rpx"
                        >{{ item.likeCount }} 人购买</text
                      >
                    </view>
                  </view>
                </view>
                <!-- <view class="justify-content-item tn-text-center">
                  <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                    <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
                  </view>
                </view> -->
              </view>
            </view>
          </view>
        </block>
      </view>
      <!-- 商品1 end-->
    </view>

    <view
      class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm"
    >
      <tn-goods-nav
        :options="countOptions"
        :buttonGroups="customButtonGroups"
        buttonType="round"
        :safeAreaInsetBottom="true"
        @optionClick="onOptionClick"
        @buttonClick="onButtonClick"
      ></tn-goods-nav>
    </view>

    <view class="tn-tabbar-height"></view>
  </view>
</template>

<script>
import template_page_mixin from "@/libs/mixin/template_page_mixin.js";
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
        series: [
          {
            data: [
              { name: "维生素A", value: 50 },
              { name: "蛋白质", value: 30 },
              { name: "能量", value: 20 },
              { name: "维生素E", value: 18 },
              { name: "矿物质钙", value: 8 },
            ],
          },
        ],
      },
      swiperList: [
        {
          id: 0,
          type: "image",
          title: "免费开源",
          name: "商业合作请联系作者",
          text: "微信：tnkewo",
          url: "https://tse2-mm.cn.bing.net/th/id/OIP-C.vxPh7YsBLXwJnrPOzLV99wHaE8?rs=1&pid=ImgDetMain",
        },
        {
          id: 1,
          type: "image",
          title: "韵科食谱南南",
          name: "欢迎加入东东们",
          text: "如果你也有不错的作品",
          url: "https://ts1.cn.mm.bing.net/th/id/R-C.08887e425c4d2fc7b09ee3829b0aaff0?rik=4DNFRmlmV5PipQ&riu=http%3a%2f%2fi2.chuimg.com%2f0f643b6289ff11e6b87c0242ac110003_800w_531h.jpg%3fimageView2%2f2%2fw%2f660%2finterlace%2f1%2fq%2f90&ehk=VjRnRx9KMTnBdTGMqWapG4H8fnVMeECwYijqFqRGXaU%3d&risl=&pid=ImgRaw&r=0",
        },
      ],
      current: 0,
      fixedList: [
        { name: "推荐" },
        { name: "同款" },
        { name: "热门", count: "99+" },
        { name: "爆款" },
      ],
      content: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费美食素材分享",
          mainImage:
            "https://www.foodiesfeed.com/wp-content/uploads/2023/04/cake-with-blueberries-cinematic-shot.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 129,
          commentCount: 999,
          likeCount: 999,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["炸串", "火锅"],
          desc: "免费美食素材分享",
          mainImage:
            "https://media.istockphoto.com/id/172284556/photo/after-the-meal.jpg?b=1&s=612x612&w=0&k=20&c=Xpz8yHTvP9t9yHaotDVGKJv3INzHK59Xv_M1WboKTF0=",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费美食素材分享",
          mainImage:
            "https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费美食素材分享",
          mainImage:
            "https://media.istockphoto.com/id/1301565375/photo/paleo-diet-healthy-food-background.webp?s=2048x2048&w=is&k=20&c=huNmFxMiCYegOjc5o1whnQbmSYyDIcES2SXABtJ0v70=",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费美食素材分享",
          mainImage:
            "https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.webp?s=2048x2048&w=is&k=20&c=taGTmOYdyRkB3EytecqG3uguX_mpbZBqx5j_l7GgT4s=",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
      ],
      content2: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["炸串", "火锅"],
          desc: "免费美食素材分享",
          mainImage:
            "https://media.istockphoto.com/id/172284556/photo/after-the-meal.jpg?b=1&s=612x612&w=0&k=20&c=Xpz8yHTvP9t9yHaotDVGKJv3INzHK59Xv_M1WboKTF0=",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
      ],
      content3: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费美食素材分享",
          mainImage:
            "https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.webp?s=2048x2048&w=is&k=20&c=taGTmOYdyRkB3EytecqG3uguX_mpbZBqx5j_l7GgT4s=",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "我们都是好孩子",
          mainImage:
            "https://www.foodiesfeed.com/wp-content/uploads/2023/08/indian-chicken-curry-bowl.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
      ],
      content4: [
        {
          userAvatar:
            "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
          userName: "可我会像",
          date: "2021年12月20日",
          label: ["烤肉", "烤肉"],
          desc: "免费美食素材分享",
          mainImage:
            "https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg",
          viewUser: {
            latestUserAvatar: [
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",
              },
              {
                src: "https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",
              },
            ],
            viewUserCount: 129,
          },
          collectionCount: 265,
          commentCount: 22,
          likeCount: 62,
        },
      ],
      countOptions: [
        {
          icon: "star",
          text: "收藏",
        },
        {
          icon: "share-circle",
          text: "分享",
        },
      ],
      customButtonGroups: [
        {
          text: "咨询客服",
          backgroundColor: "tn-cool-bg-color-5",
          color: "#FFFFFF",
        },
        {
          text: "立即购买",
          backgroundColor: "tn-cool-bg-color-15--reverse",
          color: "#FFFFFF",
        },
      ],
      tagList: [
        {
          color: "cyan",
          title: "设计",
        },
        {
          color: "blue",
          title: "韵科食谱",
        },
        {
          color: "green",
          title: "互联网",
        },
        {
          color: "orange",
          title: "免费",
        },
        {
          color: "purplered",
          title: "配色",
        },
        {
          color: "brown",
          title: "插画",
        },
      ],
    };
  },
  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
.template-product {
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
