let jump = [2, 0, 2, 3, 1, 2, 2]
let s = 8

let dp = Array(s).fill(null)
dp[s - 1] = 0

for (let i = s - 2; i >= 0; i--) {
    let j = jump[i]
    let min = Number.MAX_VALUE
    for (let k = i + 1; k <= s - 1 && k <= i + j; k++) {
        if (dp[k] != null) {
            min = Math.min(min, dp[k])
        }
    }
    if (min != Number.MAX_VALUE) {
        dp[i] = min + 1
    }
}

console.log(dp[0])