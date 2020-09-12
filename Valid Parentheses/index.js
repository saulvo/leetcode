/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
   const brackets = {
      '{': '}',
      '(': ')',
      '[': ']'
   }
   let heap = [];

   for (let char of s) {
      if (brackets[char]) {
         heap.push(brackets[char]);
      } else {
         if (heap.pop() !== char) return false;
      }
   }

   return (!heap.length);
};