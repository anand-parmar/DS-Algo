let mazz = [
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0],
];
let visited = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

flood(mazz, 0, 0, "", visited);

function flood(mazz, i, j, ans, visited) {
  if (
    i < 0 ||
    j < 0 ||
    i == mazz.length ||
    j == mazz[0].length ||
    mazz[i][j] == 1 ||
    visited[i][j] == true
  ) {
    return;
  }
  if (i == mazz.length - 1 && j == mazz[0].length - 1) {
    console.log(ans);
    return;
  }

  visited[i][j] = true;
  flood(mazz, i - 1, j, ans + "t", visited);
  flood(mazz, i, j - 1, ans + "l", visited);
  flood(mazz, i + 1, j, ans + "d", visited);
  flood(mazz, i, j + 1, ans + "r", visited);
  visited[i][j] = false;
}
