<template>
  <div id="app">
    <h2>---------modules内容</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="btninfo">修改黄雪莲信息</button>
    <h2>---------app组件内容</h2>
    <h2>{{ name + $store.state.num }}</h2>
    <button @click="addbtn">+</button>
    <button @click="sbubtn">-</button>
    <button @click="addCont(5)">+5</button>
    <button @click="addCont(10)">+10</button>
    <button @click="addStudent">添加学生信息</button>
    <h2>----------app内容getters</h2>
    <h2>{{ $store.getters.powerNum }}</h2>
    <h2>------------年龄超过20岁的学生方法一</h2>
    <h2>{{ agestu }}</h2>
    <h2>------------年龄超过20岁的学生方法一</h2>
    <h2>{{ $store.getters.agestu }}</h2>
    <h2>------------年龄超过自定义年龄的学生</h2>
    <h2>{{ $store.getters.agefun(8) }}</h2>
    <!-- <h2>{{ $store.getters.agestu }}</h2> -->
    <h2>---------hello组件内容</h2>
    <hello></hello>
  </div>
</template>

<script>
import Hello from "./components/Hello";
import { INCREMENT } from "./store/mutations-type";
export default {
  name: "App",
  data() {
    return {
      name: "当前计数",
    };
  },
  components: {
    Hello,
  },
  computed: {
    agestu() {
      return this.$store.state.stu.filter((s) => s.age > 20);
    },
  },
  methods: {
    addbtn() {
      // commit方法，接对应方法名称
      this.$store.commit(INCREMENT);
    },
    sbubtn() {
      this.$store.commit("decrement");
    },
    addCont(cont) {
      this.$store.commit(INCREMENT, cont);
    },
    btninfo() {
      // 这个是mutations同步方法commit
      //  this.$store.commit("btninfo");
      // 这个是actions异步方法，dispatch
      // this.$store.dispatch('aUpateeInfo')
      this.$store.dispatch("aUpateeInfo", "我是携带信息").then((res) => {
        console.log("里面提交了");
        console.log(res);
      });
    },
    //  addCont(cont){
    //另一种提交风格
    //    this.$store.commit({
    //      type:"increment",
    //      cont
    //    });
    // },
    addStudent() {
      const stuObj = { id: 6, name: "李二狗", age: 44 };
      this.$store.commit("incrementstudent", stuObj);
    },
  },
};
</script>

<style>
</style>
