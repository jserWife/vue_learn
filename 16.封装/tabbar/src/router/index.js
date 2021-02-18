import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Category = () => import('../views/category/Category.vue');
const Mine = () => import('../views/mine/Mine.vue');
// 1.安装插件
Vue.use(Router)
// 3.导出
export default new Router({
  // 2.创建路由
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component:Home 
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})
