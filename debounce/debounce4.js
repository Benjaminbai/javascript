function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) clearTimeout
        setTimeout(function () {
            fn.apply(this, arguments)
        }, delay)
    }
}