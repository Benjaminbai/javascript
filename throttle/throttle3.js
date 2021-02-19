function throttle(fn, delay) {
    let timer = true
    return function () {
        if (!timer) return
        timer = false
        timer = setTimeout(function () {
            fn.apply(this, arguments)
            timer = true
        }, delay)
    }
}