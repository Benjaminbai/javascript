// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
// 1. 初步实现
// Function.prototype.newCall = function (context) {
//     context.fn = this
//     context.fn()
//     delete context.fn
// }

// var person = {
//     name: 'benjamin'
// }
// var say = function () {
//     console.log(this.name)
// }
// say.newCall(person)

// 2. eval
// eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码
// Function.prototype.newCall = function (context) {
//     context.fn = this
//     let arg = []
//     for (let i = 1; i < arguments.length; i++) {
//         arg.push('arguments[' + i + ']')
//     }
//     // context.fn(arg.join(','))
//     eval(`context.fn(${arg})`)
//     delete context.fn
// }

// var person = {
//     name: 'benjamin'
// }
// var say = function (age, sex) {
//     console.log(`name: ${this.name}, age:${age}, sex:${sex}`)
// }
// say.newCall(person)


// 3. Final version
// Function.prototype.newCall = function (context) {
//     if (typeof context === 'object') {
//         context = context || window
//     } else {
//         context = Object.create(null)
//     }

//     let args = []
//     for (var i = 1; i < arguments.length; i++) {
//         args.push(`arguments[${i}]`)
//     }

//     var result = eval(`context.fn(${args})`)
//     delete context.fn
//     return result
// }

// var person = {
//     name: 'benjamin'
// }
// function say(age, sex) {
//     console.log(`name: ${this.name},age: ${age}, sex: ${sex}`);
//     return age + sex;
// }

// var check = say.newCall(person, 18, '男');
// console.log(check); // 18男

// 4. es6 version
Function.prototype.newCall = function (context, ...params) {
    if (typeof context === 'object') {
        context = context || window
    } else {
        context = Object.create(null)
    }

    let fn = Symbol()
    context[fn] = this
    let result = context[fn](...params)
    delete context.fn
    return result
}