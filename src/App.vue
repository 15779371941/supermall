<template>
  <div id="app">
    <nav>
<main-tab-bar></main-tab-bar>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import "./assets/css/base.css";
</style>
<script>
import MainTabBar from "@/components/MainTabBar";
export default {
  components: {
    MainTabBar
  }
}
</script>