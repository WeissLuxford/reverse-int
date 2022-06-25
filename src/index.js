module.exports = function reverse (n) {
    function reverseInt(number) {
        let a = number.toString().split("").reverse().join('')
        a = (a[0] == 0) ? a.substring(1) : (a[a.length - 1] == "-") ? a.slice(0, a.length - 1) : a ;
        return +a
    }
    return reverseInt(n)
}
