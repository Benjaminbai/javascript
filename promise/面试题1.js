console.log(1)
async function async1() {
    console.log(2)
    await console.log(3)
    console.log(4)
}
setTimeout(function() {
    console.log(5)
})
async1()
new Promise(function(resolve) {
    console.log(6)
    resolve()
}).then(function() {
    console.log(7)
})
console.log(8)