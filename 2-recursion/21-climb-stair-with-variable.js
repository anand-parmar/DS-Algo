let s = 7
let jump = [2, 3, 0, 1, 2, 3]

let dp = Array(7).fill(0)
dp[s - 1] = 1

for (let i = s - 2; i >= 0; i--) {
    let j = jump[i]
    for (let js = i + 1; js <= s - 1 && js <= i + j; js++) {
        dp[i] += dp[js]
    }
}

console.log(dp[0])
