<template>
  <div>
    <h2 class="title">{{ name }}</h2>
    <button @click="btnclick">按钮</button>
<cpn></cpn>
  </div>
</template>
<script>
import cpn from './Add.vue'
export default {
    components:{
        cpn
    },
     data() {
        return {
            name: '李老师2222',
        }
    },
    methods: {
        btnclick(){
            console.log('我是点击事件2222');
        }
    },
};
</script>
<style scoped>
.title{
    color:red;
}
</style>