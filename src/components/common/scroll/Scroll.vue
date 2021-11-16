<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";

export default {
  props: {
    probetype: 0,
  },
  data() {
    return {
      bscroll: null,
    };
  },
  mounted() {
    // 1.创建better-scroll实例
    this.bscroll = new Bscroll(this.$refs.wrapper, {
      probeType: this.probetype,
      click: true,
    });

    // 2.监听滚动的位置
    this.bscroll.on("scroll", (postion) => {
      this.$emit("scroll", postion);
    });
  },
  methods: {
    scrollTo(x, y, time) {
      this.bscroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
</style>