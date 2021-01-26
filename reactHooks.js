
// Class Component的问题
    // 组件复用困局
        // HOC使用（老生常谈）的问题：
        // 嵌套地狱，每一次HOC调用都会产生一个组件实例
        // 可以使用类装饰器缓解组件嵌套带来的可维护性问题，但装饰器本质上还是HOC
        // 包裹太多层级之后，可能会带来props属性的覆盖问题
        // Render Props：

        // 数据流向更直观了，子孙组件可以很明确地看到数据来源
        // 但本质上Render Props是基于闭包实现的，大量地用于组件的复用将不可避免地引入了callback hell问题
        // 丢失了组件的上下文，因此没有this.props属性，不能像HOC那样访问this.props.children

    // Javascript Class的缺陷
        // 稍微不慎就会出现因this的指向报错
        // Javascript实现的类本身比较鸡肋，没有类似Java/C++多继承的概念，类的逻辑复用是个问题
        // Class Component在React内部是当做Javascript Function类来处理的
        // Function Component编译后就是一个普通的function，function对js引擎是友好的


// Hooks的实现与使用
    // useState
    useState<S>(initialState: (() => S) | S): [S, Dispatch<BasicStateAction<S>>]
    // 返回一个状态以及能修改这个状态的setter，在其他语言称为元组（tuple），一旦mount之后只能通过这个setter修改这个状态
    // 使用了Hooks API的函数组件，返回的setter可以改变组件的状态，并且引起组件re-render
    // 和一般意义上的hook（钩子）不一样，这里的hook可以多次调用且产生不同的效果，且hook随Fiber Node一起生灭



// Hooks的问题
    // Hooks能解决组件功能复用，但没有很好地解决JSX的复用问题
    // React Hooks模糊了（或者说是抛弃了）生命周期的概念

// useMemo和useCallback的区别 及使用场景
    // useMemo 和 useCallback 接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据
        // 共同作用：
        // 仅仅 依赖数据 发生变化, 才会重新计算结果，也就是起到缓存的作用

        // 两者区别：
        // 1.useMemo 计算结果是 return 回来的值, 主要用于 缓存计算结果的值 ，应用场景如： 需要 计算的状态
        // 2.useCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费
        https://www.xinran001.com/frontend/492.html

useContext     
// 简单来说Context的作用就是对它所包含的组件树提供全局共享数据的一种技术
// 当Context Provider的value发生变化时，他的所有子级消费者都会rerender

useReducer
// 可以增强 ReducerDemo 函数提供类似 Redux 的功能，引入 useReducer 后，useReducer 接受一个 reducer 函数作为参数，reducer 接受两个参数一个是 state 另一个是 action 。然后返回一个状态 count 和 dispath，count 是返回状态中的值，而 dispatch 是一个可以发布事件来更新 state 的