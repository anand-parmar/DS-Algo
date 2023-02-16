path(1, 1, "");

function path(i, j, ans) {
  if (i == 3 && j == 3) {
    console.log(ans);
    return;
  }
  if (i > 3 || j > 3) {
    return;
  }

  for (let hj = 1; hj <= 3 - j; hj++) {
    path(i, j + hj, ans + " h" + hj);
  }
  for (let vj = 1; vj <= 3 - i; vj++) {
    path(i + vj, j, ans + " v" + vj);
  }
  for (let dj = 1; dj <= 3 - i && dj <= 3 - j; dj++) {
    path(i + dj, j + dj, ans + " d" + dj);
  }
}
