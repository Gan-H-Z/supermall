<template>
  <div id="detail">
    <detail-nav class="detail-nav"> </detail-nav>
    <scroll class="content" :pullupload="true" ref="scroll">
      <detail-swiper :swiperImg="swiperImg" @imgLoad="imgLoad"> </detail-swiper>
      <detail-base-info :info="goodsBaseInfo"> </detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"> </detail-shop-info>
      <detail-goods-info :goods-info="goodsInfo" @goodsInfoImgLoad="imgLoad" />
      <detail-param-info :paramInfo="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo" />
    </scroll>
  </div>
</template>
<script>
import DetailNav from "./childComp/DetailNav.vue";
import DetailSwiper from "./childComp/DetailSwiper.vue";
import DetailBaseInfo from "./childComp/DetailBaseInfo.vue";
import DetailShopInfo from "./childComp/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComp/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComp/DetailParamInfo.vue";
import DetailCommentInfo from "./childComp/DetailCommentInfo.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import { getDetailData, Goods, Shop, GoodsParam } from "network/detail.js/";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      swiperImg: [],
      goodsBaseInfo: {},
      shopInfo: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: {},
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetailData(this.iid).then((res) => {
      // 1.获取顶部的轮播图数据
      let data = res.result;
      this.swiperImg = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goodsBaseInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shopInfo = new Shop(data.shopInfo);
      // console.log(this.shopInfo);

      // 4.获取商品的详情信息
      this.goodsInfo = data.detailInfo;
      // console.log(this.goodsInfo);

      // 5.获取商品的参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.获取用户评论数据
      this.commentInfo = data.rate;
      // console.log(this.commentInfo);
    });
  },
  methods: {
    // 图片加载完毕后接收自定义事件，然后给自定义事件设置这个事件处理函数，函数的作用是：每次图片加载完毕后就执行这个函数。refresh()的意思是刷新BScroll的高度
    imgLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>