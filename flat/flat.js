// 方法一 直接使用flat
// let arr = arr.flat(Infinity)

// 2 转换成字符串，然后正则处理
// let str = JSON.stringify(arr)
// arr1 = str.replace(/(\[\])/g, '').split(',') 

// 3 递归处理
// let result = []
// let fn = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         if (Array.isArray(arr[i])) {
//             fn(item)
//         } else {
//             result.push(item)
//         }
//     }
// }

// 4 reeduce结合递归处理
// function flatten(arr) {
//     return arr.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
//     })
// }

// 5 使用扩展运算符
let arr = [1, [2, 3], [4, 5, [6, 7, 8, 9]]]
while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
}

console.log(111, arr)