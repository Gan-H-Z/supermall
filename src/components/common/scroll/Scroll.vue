<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import Pullup from "@better-scroll/pull-up";

Bscroll.use(Pullup);

export default {
  props: {
    probetype: 0,
    pullupload: true,
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
      pullUpLoad: this.pullupload,
    });

    // 2.监听滚动的位置
    this.bscroll.on("scroll", (postion) => {
      this.$emit("scroll", postion);
    });
    // 给bscroll绑定 "上拉加载更多"事件
    this.bscroll.on("pullingUp", () => {
      this.$emit("loadMore");
    });
  },
  methods: {
    scrollTo(x, y, time) {
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    },
    refresh() {
      this.bscroll && this.bscroll.refresh();
    },
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp();
    },
    getScrollY() {
      return this.bscroll ? this.bscroll.y : 0;
    },
  },
};
</script>

<style scoped>
</style>