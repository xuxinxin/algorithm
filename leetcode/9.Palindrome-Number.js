/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var i  = 1,
        xx = x;
    if (x<0) return false;
    while(x>=10){
        i *= 10;
        x /= 10;
    }
    while(i>=10){
        if ( (xx/i >>0) === xx%10 ){
            xx = (xx%i)/10 >> 0;
            i /= 100;
        }else{
            return false;
        }
    }
    return true;
};