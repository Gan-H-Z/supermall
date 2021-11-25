<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in swiperImg" :key="index">
      <img :src="item" alt="" @load="imgLoad" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  props: {
    swiperImg: {
      typr: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    // 图片加载完后发送自定义事件给父组件
    imgLoad() {
      this.$emit("imgLoad");
    },
  },
};
</script>
<style scoped>
.detail-swiper {
  height: 250px;
  overflow: hidden;
}
</style>