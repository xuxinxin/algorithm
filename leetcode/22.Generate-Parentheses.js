/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	var res =[];
	addParenthesis("", n, 0);
	return res;
	function addParenthesis(str, left, right){
		if(left === 0 && right === 0){
			res.push(str);
		}
		if(right>0){
			addParenthesis(')', left, right-1);
		}
		if(left>0){
			addParenthesis('(', left-1, right+1);
		}
	}
};