Function.prototype.bind = function (onThis) {
    if (typeof onThis !== 'function') throw new Error("not a function")
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