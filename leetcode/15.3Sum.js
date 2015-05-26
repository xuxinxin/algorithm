/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // hash nums
    var hash=[],num2d=[];
    nums.sort(function(v1,v2){
        if(v1<v2){
            return -1;
        }else if(v1>v2){
            return 1;
        }else{
            return 0
        }

    });
    nums.forEach(function(e,i){
        hash[e] = !!hash[e] ? hash[e]+1 : 1;
    });
    for(var i = 0; i<nums.length && nums[i]<0; i=i+hash[nums[i]]){
        for(var j=i+1; j<nums.length &&(nums[i]+nums[j] <0); j=j+hash[nums[j]]){
            if(nums[i]===nums[j]){
                j--;
            }
            var target = -(nums[i]+nums[j]);
            if(hash[target]){
                if(nums[j] === target){
                    if(hash[target]>1){
                        var triplet = [nums[i],nums[j],nums[j]];
                        num2d.push(triplet);
                    }
                }else if(target > nums[j]){
                    triplet = [nums[i],nums[j],target];
                    num2d.push(triplet);
                }
            }
        }
    }
    if(hash[0]>=3){
        num2d.push([0,0,0]);
    }
    return num2d;
};