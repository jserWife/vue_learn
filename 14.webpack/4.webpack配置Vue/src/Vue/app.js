export default{
    template:`<div>
    <h2>{{name}}</h2>
    <button @click='btnclick'> 按钮</button>
    </div>`,
    data() {
        return {
            name: '李老师2',
        }
    },
    methods: {
        btnclick(){
            console.log('我是点击事件2');
        }
    },
}