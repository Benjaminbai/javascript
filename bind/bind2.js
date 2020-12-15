Function.prototype._bind = function (obj) {
    if (typeof this !== 'function') throw new Error('not function')
    let args = [].slice.call(arguments, 1)
    let self = this
    let _fn = function () { }
    let bound = function () {
        let param = [].slice.call(arguments)
        self.apply(this.constructor === _fn ? this : obj, args.concat(param))
    }
    _fn.prototype = fn.prototype
    bound.prototype = new _fn()
    return bound
}