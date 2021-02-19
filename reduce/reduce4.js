
Array.prototype.myReduce = function (callBack, initValue) {
    let result = initValue
    for (let index = 0; index < this.length; index++) {
        result = callBack(result, this[index], index, this)
    }
    return result
}