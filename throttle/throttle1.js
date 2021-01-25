
function throttle(fn, delay) {
    let timer = true
    return function () {
        if (!timer) return
        timer = false
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = true
        }, delay)
    }
}