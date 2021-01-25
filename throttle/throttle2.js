function debounce(fn, delay) {
    let timer = true
    return function () {
        if (!timer) return
        timer = false
        timer = setTimeout(() => {
            timer = true
            fn.apply(this, arguments)
        }, delay)
    }
}