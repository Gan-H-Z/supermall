<template>
  <div>
    <tabbar id="tabbar">
      <tabbaritem path="/home" color="pink">
        <img
          slot="item-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" color="pink">
        <img slot="item-active" src="~assets/img/tabbar/category_active.svg" />
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <div slot="item-text">关于</div>
      </tabbaritem>
      <tabbaritem path="/cart" color="pink">
        <img
          slot="item-active"
          src="~assets/img/tabbar/cart_active.svg"
          alt=""
        />
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="" />
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" color="pink">
        <img
          slot="item-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>


<script>
import tabbar from "components/common/tabbar/TabBar.vue";
import tabbaritem from "components/common/tabbar/TabBarItem.vue";

export default {
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>

<style scoped>
#tabbar img {
  width: 22px;
  height: 22px;
  margin: 3.5px 0 1px 0;
}
</style>