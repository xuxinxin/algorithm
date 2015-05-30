/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var hash   = [],
        result = [];
    nums.sort(function(v1,v2){
        return v1-v2;
    });
    nums.forEach(function(e){
        hash[e] = hash[e] ? hash[e]+1 : 1;
    });
    for (var i = 0; i < nums.length-3; i=i+hash[nums[i]]) {
        for (var j = i+1; j < nums.length-2; j=j+hash[nums[j]]) {
            for(var k = j+1; k < nums.length-1; ){
                var newTarget = target-nums[i]-nums[j]-nums[k];
                if(newTarget >= nums[k] && hash[newTarget] !== undefined){
                    if(newTarget === nums[k]){
                        var equals = 2;
                        if(newTarget === nums[j]){
                            equals++;
                            if(newTarget === nums[i]){
                                equals++;
                            }
                        }
                        if(hash[newTarget]<equals){
                            break;
                        }
                    }
                    result.push([nums[i], nums[j], nums[k], newTarget]);
                }
                while(nums[k] === nums[++k]){}
            }
            if(nums[i]===nums[j]){
                j--;
            }
        };
    };
    return result;
};