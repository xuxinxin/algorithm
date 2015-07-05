/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var pn =0,
        ph = 0;
    for (var i = 0; i < haystack.length; i++) {
      if(haystack[i] === needle[pn]){
        if (pn === needle.length-1) {
          return i+1-needle.length;
        }
        pn++;

      }else{
        i  = i - pn;
        pn = 0;

      }
    }
    return -1;
};
