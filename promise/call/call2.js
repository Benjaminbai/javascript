
Function.prototype.newCall = function (context, ...parms) {
    if (typeof context === 'object') {
        context = context || window
    } else {
        context = Object.create(null)
    }
    let fn = Symbol()
    context[fn] = this
    let result = context[fn](...parms)
    delete context.fn
    return result
}