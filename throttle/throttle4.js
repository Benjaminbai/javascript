function throttle(fn, delay) {
    let time = true
    return function () {
        if (!time) return
        time = false
        setTimeout(function () {
            fn.apply(this, arguments)
            time = true
        }, delay)
    }
}