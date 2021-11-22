<template>
  <div>
    <nav-bar>
      <div slot="left" @click="imgClick">
        <img src="~assets/img/common/back.svg" alt="" class="nav-back" />
      </div>
      <div slot="center" class="nav">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="nav-item"
          :class="{ active: currentIndex === index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["详情", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    imgClick() {
      this.$router.back();
    },
  },
};
NavBar;
</script>
<style scoped>
.nav {
  display: flex;
}
.nav-item {
  flex: 1;
  font-size: 13px;
}
.nav-back {
  margin-top: 13px;
}
.active {
  color: pink;
}
</style>