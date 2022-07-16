<template>

  <tab-bar>
    <tab-bar-item path="home" active-color="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
      <div slot="item-text" class="tab-bar-item">首页</div>
    </tab-bar-item>
    <tab-bar-item  path="category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
      <div slot="item-text" class="tab-bar-item">分类</div>
    </tab-bar-item>
    <tab-bar-item path="cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg">
      <div slot="item-text" class="tab-bar-item">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
      <div slot="item-text" class="tab-bar-item">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "./tabbar/TabBarItem";
import TabBar from "./tabbar/TabBar";
export default {
  name: "MainTabBar",
  components:{
    TabBarItem,
    TabBar
  },
}
</script>

<style scoped>

</style>
