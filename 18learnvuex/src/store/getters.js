export default{
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
}