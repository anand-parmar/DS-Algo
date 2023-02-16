let arr = [
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0]
]


let m = arr[0].length
let n = arr.length

let dp = Array(n).fill(0).map((d) => Array(m).fill(0))

for (let j = m - 1; j >= 0; j--) {
    for (let i = n - 1; i >= 0; i--) {
        if (j == m - 1 ) {
            let top = i - 1 > 0 && i - 1 <= n - 1 ? dp[i - 1][j] : 0
            let right = j + 1 > 0 && j + 1 <= m - 1 ? dp[i][j + 1] : 0
            let bottom = i + 1 > 0 && i + 1 <= n - 1 ? dp[i + 1][j] : 0
            let left = j - 1 > 0 && j - 1 <= m - 1 ? dp[i][j - 1] : 0

            dp[i][j] = Math.max(top, right, bottom, left) + arr[i][j]
        }

        


    }
}

console.log(dp)

// let m = arr[0].length
// let n = arr.length

// let dp = Array(n).fill(0).map((d) => Array(m).fill(0))



// for (let j = m - 1; j >= 0; j--) {
//     for (let i = n - 1; i >= 0; i--) {
//         if (j == m - 1) {
//             dp[i][j] = arr[i][j]
//         }
//         else if (i == 0) {
//             dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j + 1]) + arr[i][j]
//         }
//         else if (i == n - 1) {
//             dp[i][j] = Math.max(dp[i][j + 1], dp[i - 1][j + 1]) + arr[i][j]
//         } else {
//             dp[i][j] = Math.max(dp[i][j + 1], dp[i - 1][j + 1], dp[i + 1][j + 1]) + arr[i][j]
//         }
//     }
// }

// let firstarr = []
// for (let i = n - 1; i >= 0; i--) {
//     firstarr[i] = dp[i][0]
// }
// console.log(dp)