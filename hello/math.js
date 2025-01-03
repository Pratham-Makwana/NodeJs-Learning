function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

// we getting the anonymous functions
// exports.multi = (a, b) => a * b;
// exports.div = (a, b) => a / b;

/*
add override by the sub  while module.exports
module.exports = add;
module.exports = sub; */

module.exports = { add, sub };
