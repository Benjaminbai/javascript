function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timter) clearTimeout(timer)
        timter = setTimeout(function () {
            fn.apply(this, arguments)
        }, delay)
    }
}