/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const map = new Map();

  for (let i = 0; i < nums.length; i++) {
     const different = target - nums[i];

     if (map.has(different)) {
        return [map.get(different), i];
     } else {
        map.set(nums[i], i)
     }
  }
};