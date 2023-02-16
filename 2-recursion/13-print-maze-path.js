printmazepath(1, 1, "");

function printmazepath(i, j, ans) {
  if (i == 3 && j == 3) {
    console.log(ans);
    return;
  }
  if (i > 3 || j > 3) {
    return;
  }

  printmazepath(i, j + 1, ans + "h");
  printmazepath(i + 1, j, ans + "v");
}
