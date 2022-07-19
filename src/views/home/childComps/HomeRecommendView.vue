<template>
<diV class="recommend">
  <div v-for="item in recommends" class="recommends-item">
    <a :href="item.link">
      <img :src="item.image">
      <div>{{item.title}}</div>
    </a>
  </div>
</diV>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommends-item{
  flex: 1;
}
.recommends-item img{
  width: 80px;
  height: 80px;
}
</style>