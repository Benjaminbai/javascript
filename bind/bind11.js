Function.prototype.myBind = function (context) {
    if (typeof context !== 'object') throw new Error('not a function')
    let arg = [].slice.call(arguments, 1)
    const self = this
    let fn = function () { }
    let bound = function () {
        return self.apply(this instanceof fn ? this : context, arg.concat([].slice(arguments)))
    }
    fn.prototype = this.prototype
    bound.prototype = new fn()
    return bound
}