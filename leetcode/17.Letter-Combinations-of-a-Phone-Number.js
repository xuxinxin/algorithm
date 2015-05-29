/**
 * @param {string} digits
 * @return {string[]}
 */

/*写的比较复杂的DFS
var letterCombinations = function(digits) {
    var len = digits.length,
        letters = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"],
        digitsArray = digits.split('');

    var outArray = [];

    for(var i = 0; i<len; i++){
        if(outArray.length === 0){
            outArray = combineLetter('', +digitsArray[i]);
        }else{
            var outLength = outArray.length;
            for(var j=0; j<outLength; j++){
                var str = outArray.shift();
                outArray = outArray.concat(combineLetter(str, digitsArray[i]));
            }
        }
    }

    return outArray;
    function combineLetter(str, digit){
        var result = [];
        for(var i=0; i<letters[digit].length; i++){
            result.push(''+str+letters[digit][i]);
        }
        return result;
    }
};
*/
// 简洁明了的DFS
var letterCombinations = function(digits) {
    var letters = ["0","1","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"],outArray = [''];
    if(!digits){
        return [];
    }
    for(var i = 0; i<digits.length; i++){

        var tempArray = [],
            digit     = +digits[i];
        for(var k = 0; k<outArray.length;k++) {
            for (var j = 0; j < letters[digit].length; j++) {
                tempArray.push(''+outArray[k]+letters[digit][j]);
            }
        };
        outArray = tempArray;
    }
    return outArray;
};