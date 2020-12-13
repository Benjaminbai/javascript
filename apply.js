// apply 和 call 的实现原理，基本类似，区别在于 apply 的参数是以数组的形式传入

// Function.prototype.newApply = function (context, arr) {
//     if (typeof context === 'object') {
//         context = context || window
//     } else {
//         context = Object.create(null)
//     }

//     context.fn = this
//     var result
//     if (!arr) {
//         result = context.fn()
//     } else {
//         var args = []
//         for (var i = 0; i < arguments.length; i++) {
//             args.push(`arr[${i}]`)
//         }
//         result = eval(`context.fn(${args})`)
//     }
//     delete context.fn
//     return result
// }

// 2 es6 version
Function.prototype.newApply = function (context, params) {
    if (typeof context === 'object') {
        context = context || window
    } else {
        context = Object.create(null)
    }

    let fn = Symbol()
    context[fn] = this
    var result = context[fn](...params)
    delete context[fn]
    return result
}  