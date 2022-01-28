arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

n = 3;

var s = "";
for (var i = 0; i < n - 1; i++) {
  for (var j = 0; j < 1; j++) {
    s += arr[i][j] + " ";
  }
}

var a = n - 1;
var b = 0;
while (a >= 0) {
  s += arr[a][b] + " ";
  a--;
  b++;
}

for (var i = 1; i < n; i++) {
  for (var j = n - 1; j < n; j++) {
    s += arr[i][j] + " ";
  }
}

console.log(s);
