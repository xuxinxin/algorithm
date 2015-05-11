/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var strings=[],substring=[],count=0,max=0;
    strings = s.split('');
    strings.forEach(function(e,i){
      if(substring[e] === undefined){
        substring[e] = i;
        count++;
      }else{
        if(count > max){
          max = count;
        }
        count = (i - substring[e]) <= count ? ( i - substring[e] ) : count+1;
        substring[e] = i;
      }
    })
    return count>max ? count : max;
};