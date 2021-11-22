<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :control="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabcontrol1"
      v-show="isTabFixed"
      class="tab-control"
    />
    <scroll
      class="content"
      ref="scroll"
      :probetype="3"
      @scroll="contentscroll"
      :pillupload="true"
      @loadMore="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control
        :control="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabcontrol2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommendView.vue";
import HomeFeature from "./childComps/HomeFeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import { debounce } from "components/common/utils.js";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabControlTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    // 3.监听事件总线中我们发送的自定义事件
    this.$bus.$on("itemImgLoad", () => {
      refresh();
      // 上拉加载更多事件默认只能触发一次，若是每次触发完事件后调用finishPullUp()方法就可以让这个事件可以被重新调用
      this.$refs.scroll.finishPullUp();
    });
  },

  // 1.保存当前界面的状态，让我们切换到别的页面后再切换回来的时候，让切换回来的页面保存原先的状态
  // 1.1离开Home页面的时候将Home页面滚动的位置保存起来(Y轴的位置)
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  // 1.保存当前界面的状态，让我们切换到别的页面后再切换回来的时候，让切换回来的页面保存原先的状态
  // 1.2回到Home页面时，让Home页面瞬间滚动回离开原先的页面的位置
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    // 为了避免出现不必要的bug，回到页面时进行一次refresh()
    this.$refs.scroll.refresh();
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      console.log(this.currentType);
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // ...res.data.list是数组的解构
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },

    // 返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 判断是否显示返回顶部按钮
    contentscroll(position) {
      // 1. 判断是否显示返回顶部按钮
      this.isShowBackTop = -position.y > 1000;
      // 2. 判断是否显示TabControl
      if (-position.y > this.tabControlTop) {
        this.isTabFixed = true;
      } else {
        this.isTabFixed = false;
      }
    },

    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    // 轮播图图加载完毕后获取TabControl离顶部的位置
    swiperImgLoad() {
      this.tabControlTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },

  // watch: {
  //   banners() {
  //     console.log(this.banners);
  //   },
  //   recommends() {
  //     console.log(this.recommends);
  //   },
  // },
};
</script>

<style scoped>
#home {
  /* height: 100vh; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.nav-bar {
  background-color: rgb(240, 161, 174);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  height: 100%;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
} */
</style>
