function addition(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// 將addition方法導出成模組
module.exports = {
  multi: multiply,
  add: addition,
};
