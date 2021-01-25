// reduce函数接收两个参数
    // callback回调函数
    // 回调函数接收4个参数
        // 初始值，或者计算后的返回值   必需
        // 当前元素                  必需
        // 当前元素的索引             可选
        // 所属的数组对象             可选
// 初始值
// array.reduce(callBack(total, currentValue, currentIndex, array), initValue)

Array.prototype.myReduce = function (callBack, initValue) {
    let result = initValue
    for (let index = 0; index < this.length; index++) {
        result = callBack(result, this[index], index, this)
    }
    return result
}