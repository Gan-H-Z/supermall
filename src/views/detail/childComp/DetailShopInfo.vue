<template>
  <div class="shopinfo">
    <div class="shopLogoAndName">
      <div class="logo">
        <img :src="shopInfo.logo" alt="" />
      </div>
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shopInfo_bottom">
      <div class="sellsAndGoddsCount">
        <div class="sells">
          <div>{{ numberFormat(shopInfo.sells) }}</div>
          <div class="font-size">总销量</div>
        </div>
        <div class="goodsCount">
          <div>{{ shopInfo.goodsCount }}</div>
          <div class="font-size">全部宝贝</div>
        </div>
      </div>
      <div class="score">
        <div v-for="(item, index) in shopInfo.score" :key="index">
          <span>{{ item.name }}</span>
          <span :style="{ color: isColor(item.isBetter) }">{{
            item.score
          }}</span>
          <span :style="isBgc(item.isBetter)">{{ isRedOrGreen(index) }}</span>
        </div>
      </div>
    </div>
    <div class="goshop">进店逛逛</div>
  </div>
</template>
<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    // 将大数字转换为万、亿(百度找的金额转换函数)
    numberFormat(value) {
      let param = {};
      let k = 10000,
        sizes = ["", "万", "亿", "万亿"],
        i;
      let reduce = "";
      if (value < k) {
        param.value = value;
        param.unit = "";
      } else {
        i = Math.floor(Math.log(value) / Math.log(k));

        param.value = (value / Math.pow(k, i)).toFixed(2);
        param.unit = sizes[i];
      }
      for (let i in param) {
        reduce += param[i];
      }
      return reduce;
    },
    // 判断商品的评分，返回高或者低
    isRedOrGreen(index) {
      if (this.shopInfo.score[index].isBetter) {
        return "高";
      } else {
        return "低";
      }
    },
    // 判断商品的评分后给元素添加对应的样式
    isColor(isBetter) {
      if (isBetter) {
        return "red";
      } else {
        return "green";
      }
    },
    isBgc(isBetter) {
      if (isBetter) {
        return { backgroundColor: "red", color: "white" };
      } else {
        return { backgroundColor: "green", color: "white" };
      }
    },
  },
};
</script>
<style scoped>
.shopinfo {
  height: 200px;
  border-bottom: 2px solid rgb(233, 232, 232);
}

.shopLogoAndName {
  position: relative;
  height: 81px;
}
.shopLogoAndName div {
  position: absolute;
  top: 10px;
  left: 8px;
  width: 60px;
  height: 60px;
  border: 1px solid rgb(194, 193, 193);
  border-radius: 30px;
  overflow: hidden;
}
.shopLogoAndName img {
  width: 60px;
  height: 60px;
}
.shopLogoAndName span {
  position: absolute;
  left: 78px;
  top: 32px;
}
.sellsAndGoddsCount {
  margin-top: 20px;
}
.sellsAndGoddsCount .sells,
.goodsCount {
  float: left;
  margin-left: 16px;
}
.sellsAndGoddsCount .sells div,
.goodsCount div {
  margin: 7px 0;
}
.sellsAndGoddsCount .goodsCount div:nth-last-child(2) {
  margin-left: 10px;
}
.sellsAndGoddsCount .goodsCount {
  padding-right: 20px;
  border-right: 1px solid #ccc;
}
.font-size {
  font-size: 8px;
}
.score {
  float: left;
  width: 160px;
  height: 58.3px;
  margin-top: -4px;
  padding-left: 35px;
  font-size: 14px;
}
.score div {
  margin-bottom: 5px;
  width: 125px;
  height: 16px;
}
.score div span {
  margin: 0 8px 20px 0;
}
.score div span:nth-last-child(2) {
  display: inline-block;
  width: 27.25px;
}
.goshop {
  width: 130px;
  height: 25px;
  margin: 90px 0 0 89px;
  text-align: center;
  line-height: 25px;
  border-radius: 7px;
  background-color: rgb(241, 245, 251);
}
</style>