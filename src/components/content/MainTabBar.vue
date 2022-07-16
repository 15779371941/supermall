<template>
<nav>
   <tab-bar>

   <tab-bar-item path="home" >
    <template  v-slot:item-icon >
      <img  src="~assets/img/tabbar/home.svg">
    </template>
     <template  v-slot:item-icon-active>
       <img  src="~assets/img/tabbar/home_active.svg" >
     </template>
     <template  v-slot:item-text>
       <div class="tab-bar-item">首页</div>
     </template>
   </tab-bar-item>
     <tab-bar-item path="category" >
       <template  v-slot:item-icon >
         <img  src="~assets/img/tabbar/category.svg">
       </template>
       <template  v-slot:item-icon-active>
         <img  src="~assets/img/tabbar/category_active.svg" >
       </template>
       <template  v-slot:item-text>
         <div class="tab-bar-item">分类</div>
       </template>
     </tab-bar-item>
     <tab-bar-item path="cart" >
       <template  v-slot:item-icon >
         <img  src="~assets/img/tabbar/cart.svg">
       </template>
       <template  v-slot:item-icon-active>
         <img  src="~assets/img/tabbar/cart_active.svg" >
       </template>
       <template  v-slot:item-text>
         <div class="tab-bar-item">购物车</div>
       </template>
     </tab-bar-item>
     <tab-bar-item path="profile" >
       <template  v-slot:item-icon >
         <img  src="~assets/img/tabbar/profile.svg">
       </template>
       <template  v-slot:item-icon-active>
         <img  src="~assets/img/tabbar/profile_active.svg" >
       </template>
       <template  v-slot:item-text>
         <div class="tab-bar-item">我的</div>
       </template>
     </tab-bar-item>
<!--   <tab-bar-item  path="category">-->
<!--     <img slot="item-icon" src="~assets/img/tabbar/category.svg">-->
<!--     <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">-->
<!--     <div slot="item-text" class="tab-bar-item">分类</div>-->
<!--   </tab-bar-item>-->
<!--   <tab-bar-item path="cart">-->
<!--     <img slot="item-icon" src="~assets/img/tabbar/cart.svg">-->
<!--     <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg">-->
<!--     <div slot="item-text" class="tab-bar-item">购物车</div>-->
<!--   </tab-bar-item>-->
<!--   <tab-bar-item path="profile">-->
<!--     <img slot="item-icon" src="~assets/img/tabbar/profile.svg">-->
<!--     <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">-->
<!--     <div slot="item-text" class="tab-bar-item">我的</div>-->
<!--   </tab-bar-item>-->


   </tab-bar>
</nav>
</template>
<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import TabBar from "@/components/common/tabbar/TabBar";
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
