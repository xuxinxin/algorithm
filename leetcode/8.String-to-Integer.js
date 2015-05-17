/**
 * @param {string} str
 * @return {number}
 */
var INT_MAX = 2147483647,
	INT_MIN = -2147483648;
var myAtoi = function(str) {
	var num = parseInt(str);
	if(isNaN(num)){
		return 0;
	}
	if(num>INT_MAX){
		return INT_MAX;
	}
	if(num<INT_MIN){
		return INT_MIN;
	}
	return num;
};