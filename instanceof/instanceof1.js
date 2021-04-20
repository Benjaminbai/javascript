function myInstanceof(L, R) { // L即per ；  R即Person
    var o = R.prototype //O为Person.prototype
    L = L.__proto__ // L为per._proto_
    while (true) {
        if (L === null) { //不通过
            return false
        }

        if (o === L) { //判断：Person.prototype ===per._proto_
            return true //如果等于就返回true，证明per是Person类型
        }

        L = L.__proto__
    }
}


// 作用： 用于判断一个引用类型是否属于某构造函数
// 还可以在继承关系中判断一个实例是否属于它的父类

// 和typeof区别
// 1. typeof 在对值类型：number，string，boolean，null，undefined，
//     以及引用类型function的反应是准确的
// 2. 但对于对象, 数组，null都会返回object