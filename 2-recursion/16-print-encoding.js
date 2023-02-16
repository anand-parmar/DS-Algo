let arr = [
  "",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

printResult("123", "");

function printResult(str, result) {
  if (str.length == 0) {
    console.log(result);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let n = Number(str.substring(0, i + 1));

    if (n == 0) {
      return;
    }
    if (n <= 26) {
      let char = arr[n];
      let ss = str.substring(i + 1);
      printResult(ss, result + char);
    }
  }
}
