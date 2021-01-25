let result = []
function recursion(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            recursion(arr[i])
        } else {
            result.push(arr[i])
        }
    }
}


function flattern(arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flattern(cur) : cur)
    })
}


while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
}