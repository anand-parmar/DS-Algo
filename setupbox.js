console.log("**********")

//let arr = Array(11).fill(0).map(d => Array(7).fill(0))
let arr = Array(4).fill(0).map(d => Array(7).fill(0))

var ways = 0
var ans = []
var blankbox = []

setupBox(arr, 0, 0, 0)



function setupBox(arr, i, j, notFill) {

    if (i >= arr.length - 1 && j >= arr[0].length - 1) {

        ans[ways] = arr
        blankbox[ways] = notFill
        ways++

        console.log(arr)
        // console.log(notFill)
        // console.log({ ways })
        return
    }

    if (arr[i][j] == 0) {

        let canPlace = false
        if (canPlaceBox(i, j, 2, 2, arr)) {
            canPlace = true
            arr = setFlag(i, j, 2, 2, arr)

            if (j <= arr[0].length - 1) {
                setupBox(arr, i, j + 2, notFill)
            } else {
                setupBox(arr, i + 1, 0, notFill)
            }
            clearFlag(i, j, 4, 3, arr)
        }

        if (canPlaceBox(i, j, 4, 3, arr)) {
            canPlace = true
            arr = setFlag(i, j, 4, 3, arr)

            if (j <= arr[0].length - 1) {
                setupBox(arr, i, j + 3, notFill)
            } else {
                setupBox(arr, i + 1, 0, notFill)
            }
            clearFlag(i, j, 4, 3, arr)
        }

        if (canPlace == false) {
            notFill++
            if (j + 1 <= arr[0].length - 1) {
                setupBox(arr, i, j + 1, notFill)
            } else {
                setupBox(arr, i + 1, 0, notFill)
            }

        }
    } else {
        if (j + 1 <= arr[0].length - 1) {
            setupBox(arr, i, j + 1, notFill)
        } else {
            setupBox(arr, i + 1, 0, notFill)
        }

    }

}



function setFlag(i, j, h, w, arr) {
    let isSet = false
    for (m = i; m <= i + (h - 1) && m <= arr.length; m++) {
        for (n = j; n <= j + (w - 1) && n <= arr[0].length; n++) {
            if (isSet == false) {
                arr[m][n] = `${h}${w}`
                isSet = true
            } else {
                arr[m][n] = 1
            }

        }
    }
    return arr
}

function clearFlag(i, j, h, w, arr) {
    for (m = i; m <= i + (h - 1) && m <= arr.length; m++) {
        for (n = j; n <= j + (w - 1) && n <= arr[0].length; n++) {

            if (arr?.[m]?.[n]) {
                arr[m][n] = 0
            }

        }
    }
    return arr
}

function canPlaceBox(i, j, h, w, arr) {
    if (i + (h - 1) <= arr.length - 1 && j + (w - 1) <= arr[0].length - 1) {
        return true
    } else {
        return false
    }
}

console.dir({
    blankbox,

}, { depth: null })
console.log("**********")
