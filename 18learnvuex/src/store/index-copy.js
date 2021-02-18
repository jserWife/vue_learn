import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const muduleA={
 state:{
  name:'王麻子王麻子王麻子'
 }
};
const state={
    // 储存数据，状态
    num: 100,
    stu: [{ id: 1, name: 'kobi', age: '3' }, { id: 2, name: 'tom', age: '23' }, { id: 3, name: 'jok', age: '33' }, { id: 4, name: 'may', age: '17' }],
    info:{name:'黄雪莲',age:'18'}
  }
//  1.安装插件
Vue.use(Vuex)
// 3.导出
export default new Store({
  // 2.创建
  state,
  // 方法（修改state数据），只能处理同步带有默认值state
  mutations,
  // 相当于计算属性，带有默认值state
  getters,
  // 异步，带有默认值context
  actions,
  // 按模块分离
  modules:{
    a:muduleA
  }
})