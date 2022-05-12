/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxMult=[];
    let minMult=[];
    maxMult[0]=nums[0];
    minMult[0]=maxMult[0];
    let result=maxMult[0];
    for(let i=1;i<nums.length;i++){
        maxMult[i]=Math.max(nums[i],maxMult[i-1]*nums[i],minMult[i-1]*nums[i]);
        minMult[i]=Math.min(nums[i],maxMult[i-1]*nums[i],minMult[i-1]*nums[i]);
        result=Math.max(maxMult[i],result);
        
    }
   
    return result;
};