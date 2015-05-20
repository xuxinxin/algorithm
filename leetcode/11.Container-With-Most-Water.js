/**
 * @param {number[]} height
 * @return {number}
 */
/*暴力破解法
var maxArea = function(height) {
    var max = 0, array = [0];
    height.forEach(function(e,i){
        if( e*i > max ){
            values = array.map(function(index,ii){
                if(height[index]*height.length < max){
                    array.splice(ii,1);
                }else{
                    return (i-index)*(Math.min(height[index],e));
                }
            });
            values.push(max);
            max = Math.max.apply(Math, values) > max ? Math.max.apply(Math, values) : max;
            if(height[i] > array[array.length-1]){
                array.push(i);
            }
        }
    });
    return max;
};
*/

// 贪心算法, 由两边向中间逼近，能达到o(n)的复杂度
var maxArea = function(height) {
    var max = 0,
          i = 0,
          j = height.length - 1;
    while(i !== j){
        if(height[i] < height[j]){
            max = max < height[i]*(j-i) ? height[i]*(j-i) :max;
            i++;
        }else{
            max = max < height[j]*(j-i) ? height[j]*(j-i) :max;
            j--;
        }
    }
    return max;
};