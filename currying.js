// 函数到柯里化： 就是只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
// 优点：参数复用
function check(reg) {
    return function (txt) {
        return reg.text(txt)
    }
}

var hasNumber = check(/\d+/g)
var hasLetter = check(/[a-z]+/g)

hasLetter('test1')
hasNumber('111222')

// 延迟运行
Function.prototype.bind = function (context) {
    var that = this
    var args = Array.prototype.slice.call(arguments, 1)
    return function () {
        return that.apply(context, args)
    }
}