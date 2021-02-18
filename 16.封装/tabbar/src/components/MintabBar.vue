<template>
  <div>
    <tabbar>
      <tabbar-itme link="/home" activeColor="red">
        <div class="itmeImg" slot="itme-icon">
          <img src="../../src/assets/imgs/tarbar/house-door.svg" alt="" />
        </div>
        <div class="itmeImg itmeImgActive" slot="itme-icon-active">
          <img src="../../src/assets/imgs/tarbar/house-door-fill.svg" alt="" />
        </div>
        <div class="itneText" slot="itme-text"><div>首页</div></div>
      </tabbar-itme>
      <tabbar-itme link="/category" activeColor="red">
        <div class="itmeImg" slot="itme-icon">
          <img src="../../src/assets/imgs/tarbar/sim.svg" alt="" />
        </div>
        <div class="itmeImg" slot="itme-icon-active">
          <img src="../../src/assets/imgs/tarbar/sim-fill.svg" alt="" />
        </div>
        <div class="itneText" slot="itme-text"><div>分类</div></div>
      </tabbar-itme>
      <tabbar-itme link="/cart" activeColor="red">
        <div class="itmeImg" slot="itme-icon">
          <img src="../../src/assets/imgs/tarbar/cart.svg" alt="" />
        </div>
        <div class="itmeImg" slot="itme-icon-active">
          <img src="../../src/assets/imgs/tarbar/cart-fill.svg" alt="" />
        </div>
        <div class="itneText" slot="itme-text"><div>购物车</div></div>
      </tabbar-itme>
      <tabbar-itme link="/mine" activeColor="red">
        <div class="itmeImg" slot="itme-icon">
          <img src="../../src/assets/imgs/tarbar/person.svg" alt="" />
        </div>
        <div class="itmeImg" slot="itme-icon-active">
          <img src="../../src/assets/imgs/tarbar/person-fill.svg" alt="" />
        </div>
        <div class="itneText" slot="itme-text"><div>我的</div></div>
      </tabbar-itme>
    </tabbar>
  </div>
</template>
<script>
// 导入组件
import Tabbar from "../../src/components/tabbar/Tabbar";
import TabbarItme from "../../src/components/tabbar/TabbarItme";
export default {
  name: "MainTabBar",
  components: {
    // 注册
    Tabbar,
    TabbarItme,
  },
};
</script>
<style scoped>
</style>
