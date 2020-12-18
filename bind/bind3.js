
//1. bind 函数的两个特性
// bind 和 curring
// function add(a, b, c) {
//     let i = a + b + c
//     return i
// }

// const func = add.bind(undefined, 1)
// func(2, 3)

// const func2 = func.bind(undefined, 4)
// func2(5, 6)

//  2. bind 和 new
// function foo() {
//     this.b = 100
//     console.log(this.a)
//     return this.a
// }
// const func3 = foo.bind({ a: 1 })
// func3()
// new func3()
//  函数中的return除非返回的是个对象，在调用new func3时候返回的是个this，指向空对象，空对象的原型是foo.prototype
//  空对象的b属性是100，也就是说通过new一个实例，bind的this没起作用，但是在参数层面起作用

// function foo(c) {
//     this.b = 100
//     console.log(this.a)
//     console.log(c)
//     return this.a
// }
// const func4 = foo.bind({ a: 1 }, 20)
// new func4()


// 实现bind
// 传入oThis就是foo.bind({a:1})中传入的对象{a:1}
Function.prototype.bind = function (onThis) {
    // 判断要绑定的对象是不是一个函数
    if (typeof this !== 'function') throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
    // 函数自带的arguments属性并不是一个真正的数组，只是一个类数组，不具备slice方法，所以用call方法指定this为arguments对象
    // slice(start, end)用法，从start 截取到end
    // 调用slice参数是1，就表示从arguments下标为1的位置开始截取，即不要第一个参数onThis,
    let args = [].slice.call(arguments, 1)
    // 保存this
    let fToBind = this
    // 创建一个空对象
    let fn = function () { }
    let bound = function () {
        // 这里的this代表着调用时环境
        // 这里的argumens指的是调用此函数的arguments，和上面的bind的执行环境的arguments不一样
        // 这里的concat就是为了把bind环境中的参数，和调用当前函数的参数连起来，来实现上面提到的柯里化
        // bind其实返回的是一个函数，外部如果用new 调用，this会指向一个空对象， 所以相当于忽略了bind对this对影响
        return fToBind.apply(this instanceof fn ? this : onThis, args.concat([].slice.call(arguments)))
    }
    // 将空对象的原型指向当前实例的原型
    fn.prototype = this.prototype
    // 将bound的原型指向fn的实例
    bound.prototype = new fn()
    return bound
}

function foo(x) {
    this.b = 100
    console.log(this.a)
    return this.a + x
}

var func = foo.bind({ a: 1 }, 20)
var za = new func({ a: 1 }, 20)
console.log(za.b)