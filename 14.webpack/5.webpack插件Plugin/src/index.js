import { add, nul } from './JS/aaa'
console.log(add(10, 10));
console.log(nul(10, 10));
console.log('哈哈哈');
console.log('哈哈哈');
// 依赖css文件
require('./CSS/index.css');
// 依赖less文件
require('./CSS/index.less');
// 使用Vue进行开发
//  import Vue from 'vue'//这个没有实现
import Vue from 'vue/dist/vue.esm.js';
// import App from './Vue/app'
import App from './Vue/App.vue'
// const App={
    // template:`<div>
    // <h2>{{name}}</h2>
    // <button @click='btnclick'> 按钮</button>
    // </div>`,
    // data() {
    //     return {
    //         name: '李老师2',
    //     }
    // },
    // methods: {
    //     btnclick(){
    //         console.log('我是点击事件2');
    //     }
    // },
// }
new Vue({
    el: '#app',
    template:'<App></App>',
    // data: {
    //     name: '李老师',
    // },
    // methods: {
    //     btnclick(){
    //         console.log('我是点击事件');
    //     }
    // },
    components:{App}
})