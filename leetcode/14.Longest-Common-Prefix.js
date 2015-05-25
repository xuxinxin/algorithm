/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }else if(strs.length === 1){
        return strs[0];
    }else if(strs.length ===2){
        var shortstr = strs[0].length > strs[1].length ? strs[1] : strs[0],
            longstr  = strs[0].length > strs[1].length ? strs[0] : strs[1];
        for(var i = 0; i<shortstr.length && longstr[i]===shortstr[i]; i++){}
        return shortstr.slice(0,i);
    }else{
        var half = (strs.length/2)>>0;
        var halfstrs = [];
        halfstrs.push(longestCommonPrefix(strs.slice(0,half)));
        halfstrs.push(longestCommonPrefix(strs.slice(half,strs.length)));
        return longestCommonPrefix(halfstrs);
    }
};