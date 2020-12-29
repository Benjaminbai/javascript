
// 1. 双重for循环
// 比较相邻元素，如果前一个比后一个大，交换位置

// 第一轮比较完，最后一个就是最大的， 就不参与比较了

function bSort(arr) {
    var len = arr.length
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; i < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                aarr[j + 1] = temp
            }
        }
    }
    return arr
}

// 2. es6 sort方法
let arr = [9, 3, 4, 1, 7, 8, 5]
function esDort(arr) {
    return arr.sort((a, b) => a - b)
}