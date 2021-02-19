var str = "let's take leetcode contest"
var reverseWords = function (s) {
    return s.split(" ").filter(item => item).reverse().join(" ");
};
var result = reverseWords(str)
console.log(result)
