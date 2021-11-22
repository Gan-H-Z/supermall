<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in swiperImg" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
import { getDetailData } from "network/detail.js";

export default {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      iid: null,
      swiperImg: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then((res) => {
      this.swiperImg = res.result.itemInfo.topImages;
    });
  },
};
</script>
<style scoped>
.detail-swiper {
  height: 250px;
  overflow: hidden;
}
</style>