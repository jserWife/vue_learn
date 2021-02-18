import Vue from 'vue'
import Router from 'vue-router'
// import About from '@/components/about.vue'
// import Home from '@/components/home.vue'
// import User from '@/components/user.vue'
// 下面的写法叫做懒加载
const About = () => import('@/components/about.vue')
const Home = () => import('@/components/home.vue')
const User = () => import('@/components/user.vue')
const HomeNews = () => import('@/components/homeNews.vue')
const HomeAlism = () => import('@/components/homeAlism.vue')
const Porfile = () => import('@/components/porfile.vue')


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      // redirect默认指向，页面打开显示
      redirect: '/home'
    },
    {
      path: '/about',
      component: About,
      // 路由独享守卫
      beforeEnter: (to, from, next) => {
        next()
      },
      meta: {
        title: '关于'
      },
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          component: HomeAlism
        },
        {
          path: 'News',
          component: HomeNews
        },
        {
          path: 'Alism',
          component: HomeAlism
        }]
    },
    {
      path: '/user/:abc',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/aaa',
      component: Porfile,
      meta: {
        title: 'aaa'
      }
    }
  ],
  mode: 'history',
  // 统一修改class
  linkActiveClass: 'active'
})

// 导航守卫router是上面new对象的router,前置勾子（前置守卫）
router.beforeEach((to, from, next) => {
  // 从from到to
  document.title = to.matched[0].meta.title
  // 必须写才能到下一步
  next()
})

// 后置守卫
router.afterEach((to, from) => {
  // 从from到to

})
export default router