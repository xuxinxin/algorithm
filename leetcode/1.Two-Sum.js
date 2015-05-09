var twoSum = function(nums, target) {
    var hashnum = [],
    	indexnum = [];
    for (var i = 0; i < nums.length; i++) {
    	hashnum[nums[i]] = i;
    }
    for ( i = 0; i < nums.length; i++) {
    	if( hashnum[ target - nums[i] ] !== undefined  && hashnum[ target - nums[i] ] !== i){
    		indexnum[0] = i+1;
    		indexnum[1] = hashnum[ target - nums[i] ]+1;
    		return indexnum;
    	}
    }
};