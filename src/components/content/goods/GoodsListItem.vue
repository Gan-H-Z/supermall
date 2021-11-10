<template>
  <div class="goods-item">
    <img :src="goodsData.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsData.title }}</p>
      <span class="price">{{ goodsData.price }}</span>
      <span class="coolect">{{ "☆ " + goodsData.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsData: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  // created() {
  //   console.log(this.goodsData);
  // },
};
</script>
<style scoped>
.goods-item {
  height: 263px;
  width: 48%;
  position: relative;
  font-size: 10px;
}
.goods-item img {
  height: 225px;
  width: 100%;
  border-radius: 5px;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
/* .goods-item .coolect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
} */
.price {
  padding: 0 5px 0 40px;
  color: rgb(250, 170, 184);
}
</style>