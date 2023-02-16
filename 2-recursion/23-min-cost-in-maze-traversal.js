let og = [
    [2, 8, 4, 1, 6, 4, 2],
    [6, 0, 9, 5, 3, 8, 5],
    [1, 4, 3, 4, 0, 6, 5],
    [6, 4, 7, 2, 4, 6, 1],
    [1, 0, 3, 7, 1, 2, 7],
    [1, 5, 3, 2, 3, 0, 9],
    [2, 2, 5, 1, 9, 8, 2]
]
let n = 7

let dp = Array(n).fill(0).map((d) => Array(n).fill(0))

for (let j = n - 1; j >= 0; j--) {
    for (let i = n - 1; i >= 0; i--) {
        if (i == n - 1 && j == n - 1) {
            dp[j][i] = og[i][j]
        } else {
            let v1 = Number.MAX_VALUE
            let v2 = Number.MAX_VALUE

            let v1Key = i + 1
            let v2Key = j + 1

            if (v1Key <= n - 1) {
                v1 = dp[j][i + 1]
            }
            if (v2Key <= n - 1) {
                v2 = dp[j + 1][i]
            }
            dp[j][i] = og[j][i] + Math.min(v1, v2)
        }

    }
}

console.log(dp[0][0])