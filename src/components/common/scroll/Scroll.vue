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
    pillupload: false,
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
      pillUpLoad: this.pillupload,
    });

    // 2.监听滚动的位置
    this.bscroll.on("scroll", (postion) => {
      this.$emit("scroll", postion);
    });

    // 给bscroll绑定 "上拉加载更多"事件 有无法解决的报错，先不用了
    // this.bscroll.on("pullingUp", () => {
    //   console.log("上拉加载更多");
    //   // 发送网络请求， 请求更多页的数据

    //   // 等数据请求完成，并且将新的数据展示出来后就调用finishPullUp()方法，因为这个事件默认只能触发一次，若是每次触发完事件后调用finishPullUp()方法就可以让这个事件可以被重新调用
    //   setTimeout(() => {
    //     this.bscroll.finishPullUp();
    //   }, 2000);
    // });
  },
  methods: {
    scrollTo(x, y, time) {
      this.bscroll.scrollTo(x, y, time);
    },
    refresh() {
      this.bscroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>