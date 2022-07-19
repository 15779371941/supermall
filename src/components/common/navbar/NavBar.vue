<template>
<diV class="nav-bar">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="center">
    <slot name="center"></slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
</diV>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 -3px 1px rgb(100,100,100,.03);
}
.left , .right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>