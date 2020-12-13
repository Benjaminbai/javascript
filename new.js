// 1.执行构造函数
// 2.当函数返回值类型为对象时，则返回该对象
// 3.当函数返回值类型不为对象时，返回该构造函数的实例化对象

function _new(fn, ...rest) {
    const thisObj = Object.create(fn.prototype)
    const result = fn.apply(thisObj, rest)
    return typeof result === 'object' ? result : thisObj
}
