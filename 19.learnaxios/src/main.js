import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// 全局配置
axios({
  url:'http://123.207.32.32:8000/home/multidata'

}).then(res=>{
  console.log(res.data);
})

// 局部配置
// const instance=axios.create({
//   baseURL:'http://123.207.32.32:8000'
// })
// instance({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })


// 封装一个request模块
import {request} from '../src/network/request'
// 方法一
// request({
//   url:'/home/multidata'
// },(res=>{console.log(res)}),err=>{console.log(err);})


// 方法二+终极用法
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

// axios拦截器
instance.interceptors.request.use(config=>{
  console.log(config);
  return config
},err=>{
  console.log(err);
})