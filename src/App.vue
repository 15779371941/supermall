<template>00
<home></home>
  <router-link to="home">主页</router-link>
  <router-view></router-view>
</template>
<script>
import home from "@/views/Home";
export default {
  components:{
    home
  }
}
</script>
<style>

</style>
