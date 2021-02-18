// 导入，前提是在模块化里面
import {sum,name,flag,name1,hight} from './aaa.js'
if(flag){
    console.log(sum(30,30),name);
}
console.log(name1,hight);


// 接收导入的3方法
import add from './aaa.js'
console.log(add);
