/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	if(nums.length === 0){
		return 0;
	}
    var front = 0,
		back  = nums.length-1;
	while(front<=back){
		if( nums[front] === val ){
			nums[front] = nums[back];
			back --;
		}else{
			front ++;
		}
	}
	return front;
};