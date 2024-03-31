<template>
  <view class="template-photo">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>山庄相册</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="content">
        <block v-for="(item, index) in list" :key="index">
          <view class="item">
            <tn-lazy-load
              :index="index"
              :image="item.src"
              :threshold="-450"
              :height="400"
              imgMode="aspectFill"
            ></tn-lazy-load>
          </view>
        </block>
      </view>
      
      <!-- <tn-load-more :status="status" @loadmore="getData"></tn-load-more> -->
    </view>
  </view>
</template>

<script>
  export default {
    name: 'TemplatePhoto',
    data() {
      return {
        status: 'loadmore',
        list: [],
        data: [
          { src: 'https://resource.tuniaokj.com/images/shop/bag1.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/bag2.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/banner1.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/banner2.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/banner3.jpg' },
          { src: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg' },
          { src: 'https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.webp?s=2048x2048&w=is&k=20&c=taGTmOYdyRkB3EytecqG3uguX_mpbZBqx5j_l7GgT4s=' },
          { src: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg' },
          { src: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/content.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/cup1.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/cup2.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/office.jpg' },
          { src: 'https://media.istockphoto.com/id/1301565375/photo/paleo-diet-healthy-food-background.webp?s=2048x2048&w=is&k=20&c=huNmFxMiCYegOjc5o1whnQbmSYyDIcES2SXABtJ0v70=' },
          { src: 'https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.webp?s=2048x2048&w=is&k=20&c=taGTmOYdyRkB3EytecqG3uguX_mpbZBqx5j_l7GgT4s=' },
          { src: 'https://resource.tuniaokj.com/images/shop/pillow.jpg' },
          { src: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg' },
          { src: 'https://media.istockphoto.com/id/1301565375/photo/paleo-diet-healthy-food-background.webp?s=2048x2048&w=is&k=20&c=huNmFxMiCYegOjc5o1whnQbmSYyDIcES2SXABtJ0v70=' },
          { src: 'https://media.istockphoto.com/id/172284556/photo/after-the-meal.jpg?b=1&s=612x612&w=0&k=20&c=Xpz8yHTvP9t9yHaotDVGKJv3INzHK59Xv_M1WboKTF0=' },
          { src: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/cake-with-blueberries-cinematic-shot.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/sticker.jpg' },
          { src: 'https://www.foodiesfeed.com/wp-content/uploads/2023/08/indian-chicken-curry-bowl.jpg' },
          { src: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg' },
          { src: 'https://resource.tuniaokj.com/images/shop/pillow.jpg' }
        ]
      }
    },
    onLoad() {
      this.getData()
    },
    onReachBottom() {
      uni.$emit('tOnLazyLoadReachBottom')
      this.getData()
    },
    methods: {
      getData() {
        let index = 0
        this.status = 'loading'
        setTimeout(() => {
          for (let i = 0; i < 30; i++) {
            index = this.$t.number.randomInt(0, this.data.length - 1)
            this.list.push({
              src: this.data[index].src
            })
          }
          this.status = 'loadmore'
        }, 1500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30rpx;
    
    .item {
      border: 1rpx solid #FAFAFA;
      flex: 0 0 335rpx;
      height: 400rpx;
      margin-bottom: 30rpx;
      border-radius: 10rpx;
      overflow: hidden;
    }
  }
</style>
