<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";

export default {
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
#tabbar {
  width: 100%;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px #e2dddd;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  text-align: center;
  font-size: 5px;
}
</style>
