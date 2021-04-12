Function.prototype.myCall = function (context, ...params) {
    if (typeof context === 'object') {

        context = context || window
    } else {
        context = Object.create(null)
    }

    let fn = Symbol()

    let result = context[fn](...params)
    delete context[fn]
    return result
}