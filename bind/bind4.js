
Function.prototype.bind = function (onThis) {
    if (typeof this !== 'function') throw Error('not a function')
    let that = this
    let args = [].slice.call(arguments, 1)
    let fn = function () { }
    let bound = function () {
        return that.apply(this instanceof fn ? this : onThis, args.concat([].slice.call(arguments)))
    }
    fn.prototype = this.prototype
    bound.prototype = new fn()
    return bound
}

function foo(x) {
    this.b = 100
    console.log(this.a)
    return this.a + x
}

let func = foo.bind({ a: 1 }, 20)
let zb = new func({ a: 1 }, 20)
console.log(zb.b)