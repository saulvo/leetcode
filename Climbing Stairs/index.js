// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0 || n === 1) return 1;

  let n1 = 1;
  let n2 = 2;

  for (let i = 3; i <= n; i++) {
    const n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }

  return n2;
};

console.log(climbStairs(3));
