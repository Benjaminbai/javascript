Function.prototype.myBind = function (context) {
    if (typeof context !== "function") throw new Error("not a function")
    const arg = Array.slice.call(arguments, 1)
    let self = this
    let fn = function () { }
    let bound = function () {
        return self.apply(this instanceof fn ? this : context, arg.concat([].slice.call(arguments)))
    }
    fn.prototype = this.prototype
    bound.prototype = new fn()
    return bound
}