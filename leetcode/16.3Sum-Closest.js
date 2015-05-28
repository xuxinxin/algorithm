/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var minDiff = Infinity;
    nums.sort(function(v1,v2){
        return v1-v2;
    })
    for (var i = 0; i < nums.length; i++) {
        var newTarget =target - nums[i];
        var front = i+1,
            back  = nums.length - 1;
        while(front < back){
            var diff = nums[front]+nums[back] -newTarget;
            if(Math.abs(diff)<Math.abs(minDiff)){
                minDiff = diff;
            }
            if(nums[front]+nums[back] < newTarget){
                front++;
            }else{
                back--;
            }
        }
    };
    return target+minDiff;
};