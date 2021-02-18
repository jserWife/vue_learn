<template>
  <div id="app">
    <!--tag可以换你想要的标签  -->
    <router-link to='/home' tag="button" replace active-class="abc">首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/'+ userId" >用户页</router-link>
    <!-- <router-link :to="{path:'/aaa',query:{name:'huangxuelian',hight:'1.88'}}">档案</router-link> -->
   <button @click="aaaClick">档案</button>
    <button @click="btnckck">首页页</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
     userId:'zhangsi'
    }
  },
  methods: {
    btnckck(){
      // 点击后首页路径更改
      this.$router.push('/home')
      console.log('首页点击');
    },
    aaaClick(){
            this.$router.push({
              path:'/aaa',
              query:{
                name:'hahahha',
                age:'18'
              }
            })
    }
  },
}
</script>

<style>
/* .router-link-active{
  color: red;
} */
.abc{
  color: rgb(55, 180, 24);
}
</style>
