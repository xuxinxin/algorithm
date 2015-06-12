/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
  * 忘记有序的条件了
  * 
var removeDuplicates = function (nums) {
    if (nums.length < 2) {
		return nums.length;
	}
	var front = 1,
		back = nums.length - 1;

	while (front <= back) {
		for (var index = 0; index < front; index++) {
			var element = nums[index];
			if (element === nums[front]) {
				var temp = nums[front];
				nums[front] = nums[back];
				nums[back] = temp;
				back--;
				front--;
				break;
			}
		}
		front++;
	}
	return front - 1;
};
*/

var removeDuplicates = function (nums) {
    if (nums.length < 2) {
		return nums.length;
	}
	var id = 1;
	for (var index = 0; index < nums.length; index++) {
		if(nums[index] != nums[index-1]){
			nums[id] = nums[index];
			id++;
		}
	}
	return id;
};


