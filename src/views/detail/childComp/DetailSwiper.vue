<template>
  <div>
    <swiper>
      <swiper-item>
        <img src="" alt="" />
      </swiper-item>
    </swiper>
  </div>
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
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then((res) => {
      console.log(res);
    });
    console.log(this.$route.params.iid);
  },
};
</script>
<style scoped>
</style>