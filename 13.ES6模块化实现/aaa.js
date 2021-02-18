let name='小李';
let age=18;
let flag=true;

function sum(num1,num2){
    return num1+num2
}
if(flag){
    console.log(sum(20,20));
}
// 导出1，前提是在模块化里面
export{sum,name,flag,age}


// 导出2,也可以导出函数和类
export var name1='二狗子';
export var hight=1.88;


// 导出3，export default,就是可以自己命名字，只能有一个default
const address='成都市';
export default address

