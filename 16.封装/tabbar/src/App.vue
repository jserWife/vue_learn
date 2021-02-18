<template>
  <div id="app">
    <router-view></router-view>
    <!-- 使用 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/MintabBar'
export default {
  name: "App",  
  components: {
    // 注册
  MainTabBar
  },
};
</script>

<style>
/* 引入css */
@import "../src/assets/css/beas.css";
.itmeImg img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
.itneText {
  font-size: 14px;
}
.itmeImgActive img{
  background: red;
}
</style>
