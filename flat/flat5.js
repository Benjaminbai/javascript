function recursive(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            recursive(arr[i])
        } else {
            result.push(arr[i])
        }
    }
}


while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
}

function flatten(arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    })
}