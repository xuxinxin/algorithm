/**
 * @param {string} s
 * @return {string}
 * the first one is o(n^3)

var longestPalindrome = function(s) {
    var length = s.length,
    	ss = '#'+s.split('').join('#')+'#',
    	count  = 1,  index = 0,
    	begin  = 0, i,j;
    while (begin < ss.length-1){
    	if(ss.charAt(begin) === ss.charAt(begin+2)){
    		i = findPalindrome(ss, begin, begin+2);
    		if( (begin+1-i)*2+1 > count ){
    			count = (begin+1-i)*2;
    			index = i;
			}
    	}
    	begin++;
    }
    return ss.substring(index, index+count).replace(/#/g,'');
};
function findPalindrome( s,i,j ){
	while( !!s.charAt(i) && ( s.charAt(i) === s.charAt(j) )){
		i--;
		j++;
	}
	return i;
}

*/

/**
 * @param {string} s
 * @return {string}
 * @p array 辅助数组，表示以当前字母为中心的最长的回文子串
 * @mark 回文子串处理的最长位置索引
 * @index 最长子串位置的索引
 */
var longestPalindrome = function(s) {
	var ss = '#'+s.split('').join('#')+'#',
		p  = [], mark=0, id=0, index=0;

	for (var i = 0; i < ss.length; i++) {
		if(i < mark){
			p[i] = p[2*id-i] < mark-i ? p[2*id-i] : mark-i;
		}else{
			p[i] = 1;
		}
		for(;(ss[i+p[i]] === ss[i-p[i]]) && !!(ss[i+p[i]]); p[i]++){
			;
		}
		if(p[i]+i>mark){
			mark = p[i]+i;
			id   = i;
		}
		if( p[i]>p[index] ){
			index= i;
		}
	};

	return ss.substring((index+1-p[index]),(index+p[index])).replace(/#/g,'');
}
