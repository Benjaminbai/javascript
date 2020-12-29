//  1
let arr = arr.flat(Infinity)

// 2
let str = JSON.stringify(arr)
arr1 = str.replace(/(\[\])/g, "").split(',')

// 3
let result = []
let fn = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (Array.isArray(item)) {
            fn(item)
        } else {
            result.push(item)
        }
    }
}

// 4
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    })
}