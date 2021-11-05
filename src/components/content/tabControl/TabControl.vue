<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in control"
      class="tab-control-item"
      :key="index"
    ></div>
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
};
</script>
<style scoped>
</style>