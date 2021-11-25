<template>
  <div class="detailBaseInfo">
    <div class="info-title">{{ info.title }}</div>
    <div class="price">
      <span class="info-newPrice">{{ info.newPrice }}</span>
      <span class="info-oldPrice">{{ info.oldPrice }}</span>
      <span class="info-discount">{{ info.discount }}</span>
    </div>
    <div class="info-columns">
      <span v-if="info.columns">{{ info.columns[0] }}</span>
      <span v-if="info.columns">{{ info.columns[1] }}</span>
      <span v-if="info.services">{{
        info.services[info.services.length - 1].name
      }}</span>
    </div>
    <div class="info-services">
      <span v-if="info.services">
        <img :src="info.services[2].icon" alt="" />
        {{ info.services[2].name }}
      </span>
      <span v-if="info.services">
        <img :src="info.services[3].icon" alt="" />
        {{ info.services[3].name }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.info-title {
  margin: 10px 8px 0;
  font-size: 15px;
}
.price {
  position: relative;
  width: 100%;
  height: 30px;
  margin-top: 8px;
}
.info-newPrice {
  font-size: 16px;
  color: rgb(250, 101, 114);
  margin-left: 8px;
}
.info-oldPrice {
  text-decoration: line-through;
  font-size: 13px;
  margin-left: 5px;
  color: rgb(166, 167, 164);
}
.info-discount {
  position: absolute;
  top: -1px;
  margin-left: 3px;
  padding: 3px;
  color: white;
  background-color: rgb(250, 101, 114);
  font-size: 12px;
  border-radius: 8px;
}
.info-columns {
  display: flex;
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 14px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgb(231, 231, 226);
}
.info-columns span {
  flex: 1;
  font-size: 13px;
  color: rgb(166, 167, 164);
}
.info-columns span:nth-last-child(2) {
  text-align: center;
}
.info-columns span:nth-last-child(1) {
  text-align: right;
}

.info-services {
  height: 60px;
  line-height: 60px;
  font-size: 10px;
  vertical-align: bottom;
  padding: 0 8px 0;
  border-bottom: 5px solid rgb(250, 250, 250);
}
.info-services img {
  width: 10px;
  height: 10px;
}
.info-services span:nth-last-child(1) {
  padding-left: 30px;
}
</style>
