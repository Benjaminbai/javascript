Promise.prototype.myAll = function (arr) {
    let result, count = 0
    return new Promise(function (resolve, reject) {
        for (let val of arr) {
            Promise.resolve(val).then(function (res) {
                count++
                result[count] = res
                if (count === arr.length) {
                    return resolve(result)
                }
            }, function (err) {
                return reject(err)
            })
        }
    })
}