<template>
  <div class="item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active"></slot>
    </div>
    <!-- <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div> -->
    <div :style="isActiveTextColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    path: String,
    color: String,
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      return this.path == this.$route.path ? true : false;
    },
    isActiveTextColor() {
      return this.path == this.$route.path ? { color: this.color } : {};
    },
  },
};
</script>



<style scoped>
.item {
  flex: 1;
}
.active {
  color: pink;
}
</style>