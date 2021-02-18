import {INCREMENT} from './mutations-type'
export default{
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
}