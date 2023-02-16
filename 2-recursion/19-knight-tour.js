let arr = Array(5).fill(0).map(() => Array(5).fill(0));

find(arr, 2, 2, 1)

function find(arr, i, j, move) {

    if (i < 0 || i >= arr.length || j < 0 || j >= arr.length || arr[i][j] > 0) {
        return
    }
    if (move == arr.length * arr.length) {
        arr[i][j] = move
        displayboard(arr)
        arr[i][j] = 0
    }

    arr[i][j] = move
    find(arr, i - 2, j + 1, move + 1)
    find(arr, i - 1, j + 2, move + 1)

    find(arr, i + 1, j + 2, move + 1)
    find(arr, i + 2, j + 1, move + 1)

    find(arr, i + 2, j - 1, move + 1)
    find(arr, i + 1, j - 2, move + 1)

    find(arr, i - 1, j - 2, move + 1)
    find(arr, i - 2, j - 1, move + 1)
    arr[i][j] = 0
}

function displayboard(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            process.stdout.write(arr[i][j] + " ");
        }
        console.log('')
    }
    console.log('***')
}