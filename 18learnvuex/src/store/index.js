import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import {INCREMENT} from './mutations-type'

const muduleA={
 state:{
  name:'王麻子'
 }
}
//  1.安装插件
Vue.use(Vuex)
// 3.导出
export default new Store({
  // 2.创建
  // 储存数据，状态
  state: {
    num: 100,
    stu: [{ id: 1, name: 'kobi', age: '3' }, { id: 2, name: 'tom', age: '23' }, { id: 3, name: 'jok', age: '33' }, { id: 4, name: 'may', age: '17' }],
    info:{name:'黄雪莲',age:'18'}
  },
  // 方法（修改state数据），只能处理同步带有默认值state
  mutations: {
    // 储存是自带state,上面的,自定义名字increment，decrement，等会使用 
    [INCREMENT](state) {
      state.num++
    },
    decrement(state) {
      state.num--
    },
    // 参数2 是commit传过来的
    [INCREMENT](state,cont){
      state.num+=cont
    },
    // 另一种提交风格对应
    // increment(state,payload){
    //   state.num+=payload.cont
    // },
    incrementstudent(state,stuObj){
      state.stu.push(stuObj)
    },
    btninfo(state){
      // 这个不会响应式，实际改了，页面无变化
      state.info.name='李老师'
      // 这个是响应式增加内容（修改对象，索引值，修改后的内容）
      // Vue.set(state.info,'btninfo','洛杉矶')
      // 这个是响应式删除内容（删除对象，删除内容)
      // Vue.delete(state.info,'age')

    }
  },
  // 相当于计算属性，带有默认值state
  getters: {
    // 第二个参数是getters，可以在计算属性里面找结果，第三个参数访问根
    powerNum(state, aaa) {
      return state.num * state.num
    },
    agestu(state) {
      return state.stu.filter(s => s.age > 20)
    },
    agefun(state) {
      return function agefun(age) {
        return state.stu.filter(s => s.age > age)
      }
    }
  },
  // 异步，带有默认值context
  actions:{
    // aUpateeInfo(context){
    //   setTimeout(()=>{
    //     context.commit('btninfo')
    //   })
    // }
    aUpateeInfo(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              context.commit('btninfo')
              console.log(payload);
              resolve(1111)
            },1000)
      })
    }
  },
  // 按模块分离
  modules:{
    a:muduleA
  }
})