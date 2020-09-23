/**
 * Remove Duplicates from Sorted Array
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function (nums) {

   let index1 = 0;
   for (let index2 = 0; index2 < nums.length; index2++) {
      if (nums[index1] !== nums[index2]) {
         index1++;
         nums[index1] = nums[index2];
      }
   }

   return index1 + 1;
};