/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
   if (!Array.isArray(nums) || nums.length === 0 || !val) return 0;

   let index1 = 0;
   for (let index2 = 0; index2 < nums.length; index2++) {
      if (nums[index2] !== val) {
         nums[index1] = nums[index2];
         index1++;
      }
   }

   return index1;
};