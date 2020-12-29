// bind 两个特性
// bind 和 curring
function add(a, b, c) {
    let i = a + b + c
    return i
}

const func = add.bind(undefined, 1)
func(2, 3)

// bind 和 new
function foo() {
    this.b = 100
    return this.a
}
const func3 = foo.bind({ a: 1 })
func3()
new func3()
// 函数中的return除非返回是个对象，在调用new func3的时候返回的是个this，指向一个空对象，这个空对象的原型是foo。prototype

Function.prototype.bind = function (onThis) {
    if (typeof this != 'function') throw new Error('not a function')

    // 不要第一个参数onthis
    let arg = [].slice.call(arguments, 1)
    let that = this
    let fn = function () { }
    let bound = function () {
        return that.apply(this instanceof fn ? this : onThis, arg.concat([].slice.call(arguments)))
    }
    fn.prototype = this.prototype
    bound.prototype = new fn()
    return bound
}
