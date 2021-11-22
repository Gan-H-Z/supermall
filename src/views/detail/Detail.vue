<template>
  <div>
    <detail-nav> </detail-nav>
    <detail-swiper> </detail-swiper>
  </div>
</template>
<script>
import DetailNav from "./childComp/DetailNav.vue";
import DetailSwiper from "./childComp/DetailSwiper.vue";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
  },
};
</script>
<style scoped>
</style>