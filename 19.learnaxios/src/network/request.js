import axios from 'axios'
// 方法一
// export function request(config, success, failure) {
//     // 1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000'
//     })
//     instance(config)
//         .then(res => {
//             success(res)
//         })
//         .catch(err => {
//             failure(err)
//         })
// }

// 方法二
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000'
//         })
//         instance(config)
//             .then(res => {
//                resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

// 终极写法
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000'
    })
  return instance(config)
}
