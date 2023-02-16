let arr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]

queen(arr, '', 0)

function queen(arr, ans, r) {
    if (r == arr.length) {
        console.log(ans)
        return
    }

    for (let c = 0; c < arr.length; c++) {
        if (isQueenSafe(arr, r, c) == true) {
            arr[r][c] = 1
            queen(arr, ans + `${r}${c},`, r + 1)
            arr[r][c] = 0
        }
    }
}

function isQueenSafe(arr, r, c) {
    for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
        //console.log(`${i}${j}`)
        if (arr[i][j] == 1) {
            return false
        }
    }
    //console.log("*")
    for (let i = r - 1; i >= 0; i--) {
        //console.log(`${i}${c}`)
        if (arr[i][c] == 1) {
            return false
        }
    }
    //console.log("*")
    for (let i = r - 1, j = c + 1; i >= 0 && j <= arr.length; i--, j++) {
        //console.log(`${i}${j}`)
        if (arr[i][j] == 1) {
            return false
        }
    }
    return true
}