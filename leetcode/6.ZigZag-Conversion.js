/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var sArray = s.split(''),
    	newSArray = [],
    	returnS = '';
    if (numRows == 1){
    	return s;
    }
    for (var i = 0; i < numRows; i++) {
    	newSArray.push([]);
    }
    for( i = 0; i<sArray.length; i++){
    	var j = i%( 2*numRows-2 );
    	if(j<numRows){
    		newSArray[j].push(sArray[i]);
    	}else{
    		newSArray[2*numRows-2-j].push(sArray[i]);
    	}
    }
    for( array of newSArray ){
    	returnS += array.join('');
    }
    return returnS;
};