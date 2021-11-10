<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" class="swiper"></home-swiper>
    <home-recommend :recommends="recommends" />
    <home-feature />
    <tab-control
      :control="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
    />
    <goods-list :goods="showGoods" />
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommendView.vue";
import HomeFeature from "./childComps/HomeFeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl,
    GoodsList,
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

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // ...res.data.list是数组的解构
        this.goods[type].list.push(...res.data.list);
      });
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
.nav-bar {
  background-color: rgb(240, 161, 174);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.swiper {
  padding-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
