<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/Alism">头条</router-link>
    <router-link to="/home/News">新闻</router-link>
    <keep-alive exclude="user">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "Home",
  // 阻止重新创建
  created() {
    // 创建生命周期函数
    console.log('created');
  },
  destroyed() {
    // 销毁前生命周期函数
    console.log('destroyed');
  },
};
</script>
<style></style>