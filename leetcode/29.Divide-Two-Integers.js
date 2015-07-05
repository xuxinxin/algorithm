/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var INT_MIN = -2147483648;
 var INT_MAX = 2147483647;
 var divide = function(dividend, divisor) {
 		if(divisor == 1)
 				return dividend;
 		if(dividend == INT_MIN && Math.abs(divisor) == 1)
 				return INT_MAX;

     if(divisor===0){
       return INT_MAX;
     }
     if( ( dividend<0 && divisor>0 ) || ( dividend>0 && divisor<0 )){
       return -divide(Math.abs(dividend), Math.abs(divisor));
     }
     dividend = Math.abs(dividend);
     divisor  = Math.abs(divisor);
     var result = 0,
         divisorKeep = divisor;

     while(dividend >= divisorKeep){
       var v = 1;
       while(dividend>= (divisor<<1)  ){
 				if(divisor<<1 <=0){
 						break;
 				}
 				v = v<<1;
         divisor = divisor<<1;
       }
       result+=v;
       dividend -=divisor;
       divisor = divisorKeep;
     }
     return result;
 }
