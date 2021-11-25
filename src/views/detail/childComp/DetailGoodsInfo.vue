<template>
  <div class="goodsInfo">
    <div class="text">
      <div class="text-top">■</div>
      <div class="text-center" v-if="goodsInfo.detailImage">
        {{ text_center() }}
      </div>
      <div class="text-bottom">■</div>
      <div v-if="goodsInfo.detailImage" class="text-bottom-bottom">
        {{ goodsInfo.detailImage[0].key }}
      </div>
    </div>
    <div class="Img">
      <img
        :src="item"
        v-for="(item, index) in imgList"
        :key="index"
        @load="goodsInfoImgLoad"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      descLength: 0,
      imgLength: 0,
      counter: 0,
      imgList: [],
    };
  },
  methods: {
    // 判断商品详情信息中是否有推荐语，如果没有就返回 '新款上市'，如果有就原封不动的返回
    text_center() {
      this.descLength = this.goodsInfo.detailImage[0].desc;
      if (this.descLength.length < 1) {
        return "新款上市~";
      } else {
        return this.descLength;
      }
    },
    // 图片加载完毕后发送自定义事件给父组件，然后让父组件来调用这个自定义事件来重新计算BScroll的高度，来解决没办法滚动到最底部的问题
    goodsInfoImgLoad() {
      // 判断，所有的图片都加载完了，那么进行一次回调就可以了
      // if (++this.counter === this.imgLength) {
      this.$emit("goodsInfoImgLoad");
      // }
    },
  },
  watch: {
    goodsInfo() {
      // 将图片给imgList
      this.imgList = this.goodsInfo.detailImage[0].list;
      // 将图片数量给imgLength
      // this.imgLength = this.goodsInfo.detailImage[0].list.length;
    },
  },
};
</script>
<style scoped>
.text {
  height: 100px;
  margin-bottom: 20px;
}
.text .text-top,
.text-bottom {
  width: 100px;
  border-bottom: 1px solid black;
}
.text .text-top {
  margin-left: 8px;
}
.text .text-center {
  margin: 13px 0 13px 8px;
}
.text .text-bottom {
  text-align: right;
  margin-left: 213px;
}
.text .text-bottom-bottom {
  height: 20px;
  margin: 13px 0 13px 8px;
}
.Img img {
  width: 100%;
}
</style>