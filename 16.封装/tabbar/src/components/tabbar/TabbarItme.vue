<template>
  <div class="tab-bar-itme" @click="btnClick">
    <div v-if="!isActive"><slot name="itme-icon"></slot></div>
    <div v-else><slot name="itme-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="itme-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabbarItme",
   props:{
    link:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
      return {
          //isActive:true,
      }
  },
  computed:{
    isActive(){
      // path是固定属性方法，不能改
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    btnClick(){

      this.$router.replace(this.link)
    }
  },
};
</script>
<style scoped>
.tab-bar-itme {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>