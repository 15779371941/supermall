<template>
<diV id="home">
 <nav-bar class="home-nav">
   <div slot="center">首页</div>
 </nav-bar>
<home-swiper :banners="banners" ></home-swiper>
  <home-recommend-view :recommends="recommends"></home-recommend-view>
  <div @click="btn">1</div>
</diV>

</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import {getHomeMultidata} from "@/network/home";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";

export default {
  name: "Home",
  components:{
    HomeRecommendView,
    NavBar,
    HomeSwiper,
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },

created() {
  getHomeMultidata().then(res=>{
    this.recommends=res.data.data.recommend.list;
    this.banners=res.data.data.banner.list;
  })

},
  methods:{
    btn(){
      console.log(this.recommends)
      console.log(this.banners)
    }
  }

}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
