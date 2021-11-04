<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid rgb(241, 241, 241);
  padding: 7px 0 20px;
}
.recommend div {
  flex: 1;
}
.recommend img {
  width: 70px;
  height: 70px;
  margin-bottom: 3px;
}
</style>