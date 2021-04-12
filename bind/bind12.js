Function.prototype.myBind = function (context) {
    if (typeof context !== 'object') throw new Error('not a function')
    let arg = [].slice(arguments, 1)
    let fn = function () { }

    let self = this

    let bound = function () {
        return self.apply(context instanceof fn ? this : context, arg.concat([].slice(arguments)))
    }

    fn.prototype = this.prototype
    bound.prototype = new fn()

    return bound
}