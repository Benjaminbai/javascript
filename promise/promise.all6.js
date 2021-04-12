Promise.prototype.myAll = function (arr) {
    let count = 0
    let result = []
    return new Promise((resolve, reject) => {
        for (let val of arr) {
            Promise.resolve(val).then(res => {
                count++
                result[count] = res
                if (count === arr.length) {
                    return resolve(result)
                }
            }, err => {
                return reject(err)
            })
        }
    })
}