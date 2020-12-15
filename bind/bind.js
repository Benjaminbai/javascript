// bind()方法创建一个新函数，在bind被调用时，这个函数对this，被指定为bind()的第一个参数
// 而其余参数将作为新函数的参数，供调用时使用

// 特点：
// 1. 返回新的函数，且新函数的this无法被修改
// 2. 不执行
// 3. 支持柯里化
// 4. new出来的实例this指向自己，普通调用this指向bind对象

// 返回新函数，且this不能被修改
// Function.prototype.bind_ = function (obj) {
//     var self = this
//     return function () {
//         self.apply(obj)
//     }
// }

// var obj = {
//     z: 1
// }

// function fn(x) {
//     console.log(this.z, x)
// }

// fn.bind_(obj)()


// 支持传参，支持柯里化
// Function.prototype.bind_ = function (obj) {
//     // 第0位是this, 所以得从第一位开始裁剪
//     var args = [].slice.call(arguments, 1)
//     var self = this
//     return function () {
//         var params = [].slice.call(arguments)
//         self.apply(obj, args.concat(params))
//     }
// }

// var obj = {
//     z: 1
// }

// function fn(x, y) {
//     this.name = '11111'
//     console.log(this.z, x, y)
// }
// fn.prototype.age = 666
// var bound = fn.bind_(obj, 2)
// bound(3)

// 支持new函数调用，继承prototype
// Function.prototype.bind_ = function (obj) {
//     let args = [].slice.call(arguments, 1)
//     let self = this
//     let bound = function () {
//         let params = [].slice.call(arguments)
//         self.apply(this.constructor === fn ? this : obj, args.concat(params))
//     }
//     bound.prototype = self.prototype
//     return bound
// }

// 最终版
Function.prototype.bind_ = function (obj) {
    if (typeof this !== 'function') throw new Error('not function')
    let args = [].slice.call(arguments, 1)
    let self = this
    let _fn = function () { }
    let bound = function () {
        let param = [].slice.call(arguments)
        self.apply(this.constructor === fn ? this : obj, args.concat(param))
    }
    _fn.prototype = fn.prototype
    bound.prototype = new _fn()
    return bound
}