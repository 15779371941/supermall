<template>
 <diV class="tab-bar-item" @click="btnclick">
   <div v-if="!isActive">
     <slot name="item-icon"></slot>
   </div>
   <div v-else>
     <slot name="item-icon-active"></slot>
   </div>
   <div :style="isActiveStyle">
     <slot name="item-text"></slot>
   </div>
 </diV>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      path: String
    },
    activeColor:{
      path:String,
      default:'red'
    }
  },
  data(){
    return{

    }
  },
  computed:{
isActive(){
  console.log(this.$route.path)
  console.log(this.$router)
  console.log(this.path)
  return  this.$route.path.indexOf(this.path)==1
},
    isActiveStyle(){
  return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    btnclick(){
      this.$router.push(this.path)
          }
  },

}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item div img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
/*.active{*/
/*  color: red;*/
/*}*/
</style>
