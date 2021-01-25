var str = "let's take leetcode contest"
var middle = str.split("")
var result = middle.map((item) => {
    return item.split("").reverse().join("")
})
