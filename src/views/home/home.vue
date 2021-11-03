<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./homeSwiper/HomeSwiper.vue";

import { getHomeMultidata } from "network/home.js";

export default {
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },

  watch: {
    banners() {
      console.log(this.banners);
    },
    recommends() {
      console.log(this.recommends);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: rgb(240, 161, 174);
  color: #fff;
}
</style>
