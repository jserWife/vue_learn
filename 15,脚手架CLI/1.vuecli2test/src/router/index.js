// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 通过vue.use(插件),安装插件
Vue.use(Router)
// 将router对象传入vue实例
export default new Router({
  // 配置映射关系
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
