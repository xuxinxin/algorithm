/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var Roman=[],num = 0;
    Roman['I'] = 1;
    Roman['V'] = 5;
    Roman['X'] = 10;
    Roman['L'] = 50;
    Roman['C'] = 100;
    Roman['D'] = 500;
    Roman['M'] = 1000;
    for (var i = 0; i < s.length; i++) {
    	if( s[i+1] && Roman[s[i+1]]>Roman[s[i]]){
    		num = num +Roman[s[i+1]] - Roman[s[i]];
    		i++;
    	}else{
    		num = num + Roman[s[i]];
    	}
    };
    return num;

};