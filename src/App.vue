<template>
  <div id="app">
    <router-view />
    <maintabbar />
  </div>
</template>

<script>
import maintabbar from "components/content/MainTabBar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    maintabbar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
