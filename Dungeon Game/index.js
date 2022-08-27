/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const sharps = [
    [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
  ];
  const arr = sharps.map((sharp, e) => {
    const test = sharp.reduce((prev, current, i) => {
      const value = current.reduce((a, b, j) => {
        if (b === 0 || !dungeon[i] || !dungeon[i][j]) return a;
        return a + dungeon[i][j];
      }, 0);
      return prev + value;
    }, 0);
    return 1 + Math.abs(test);
  });
  return Math.min(...arr);
};

console.log(calculateMinimumHP([[100]]));
