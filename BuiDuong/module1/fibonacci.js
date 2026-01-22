function fun(n, flag) {
  if (flag === true) {
    return fibRecursive(n);
  }
  return -1;
}

function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

module.exports = { fun };
