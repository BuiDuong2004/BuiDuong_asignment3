function fun(n, flag) {
  if (flag === false) {
    return fibLoop(n);
  }
  return -1;
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
