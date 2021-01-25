Array.prototype.myReduce = function (callBack, initValue) {
    let result = initValue
    for (var i = 0; i < this.length; i++) {
        result = callBack(result, this[i], i, this)
    }
    return result
}