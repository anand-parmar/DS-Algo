let n = 5

console.log(ans(5))

function ans(n) {
    if (n == 0) {
        return 1
    }
    if (n < 0) {
        return 0
    }

    let f1 = ans(n - 1)
    let f2 = ans(n - 2)
    let f3 = ans(n - 3)

    return f1 + f2 + f3

}