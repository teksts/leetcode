/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const past = [];
  for (let i = 0; i < nums.length; i++){
      for (let j = 0; j < past.length; j++) {
          if (nums[i] + past[j] === target) {
              return [i, j];
          }
      }
      past.push(nums[i]);
  }
};