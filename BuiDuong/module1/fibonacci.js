function fun(n, flag) {
  if (flag === true) {
    return fibRecursive(n);
  } else {
    return fibLoop(n);
  }
}

function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibLoop(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

module.exports = { fun };
