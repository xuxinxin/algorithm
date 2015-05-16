/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x<0){
        return reverse(-x) === 0 ? 0 : -reverse(-x);
    }
    var y = +x.toString().split('').reverse().join('');
    return y > Math.pow(2,31) ? 0: y;
};