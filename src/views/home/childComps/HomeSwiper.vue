<template>
<Swiper>
  <swiper-item v-for="item in banners">
    <a :href="item.link">
    <img :src="item.image">
    </a>
  </swiper-item>
</Swiper>
</template>
<script>
import {Swiper} from "@/components/common/swiper";
import {SwiperItem} from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },

  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>

</style>