<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in control"
      class="tab-control-item"
      :key="index"
      @click="itemClick(index)"
    >
      <span :class="{ 'active-control': index == currentIndex }">{{
        item
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    control: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
}
.tab-control span {
  padding: 5px;
}

.active-control {
  border-bottom: 4px solid pink;
  color: pink;
}
.tab-control-item {
  flex: 1;
}
</style>