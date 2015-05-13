/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var l1 = nums1.length,
    	l2 = nums2.length,
    	ll = (l1+l2)%2 ? (l1+l2-1)/2 : (l1+l2)/2-1 ,  // 左边有多少个数
    	nums_long = l1>l2 ? nums1 : nums2,
    	nums_short = l1<=l2 ? nums1 : nums2,
    	long_length = l1>l2 ? l1 : l2,
    	short_length = l1<=l2 ? l1 :l2,

    	i1 = 0,
    	i2 = short_length===0 ? 1 : 0;//make index larger than length =0

    while( ll>0 ){
    	t_i1 = i1 + half(ll);
    	t_i2 = i2 + half(ll);
    	if( t_i2 < short_length ){
    		if(nums_long[t_i1]<nums_short[t_i2]){
    			if(half(ll) ===0){
    				ll = ll -1;
    				i1 = i1+1;
    			}else{
	    			ll = ll -half(ll);
	    			i1 = t_i1;
	    		}
    		}else{
    			if(half(ll) ===0){
    				ll = ll -1;
    				i2 = i2+1;
    			}else{
	    			ll = ll - half(ll);
	    			i2 = t_i2;
	    		}
    		}
    	}else {  //t_i2> short_length
    		if(i2 < short_length){
    			// short_nums havn't remove competely
    			if(nums_long[i1] < nums_short[i2]){
    				ll = ll -1;
    				i1 = i1 + 1 ;
    			}else{
    				ll = ll-1;
    				i2 = i2 + 1;
    			}
    		}else{
    			if(half(ll)===0){
    				ll = ll - 1;
    				i1 = i1+1;
    			}else{
	    			ll = ll - half(ll);
	    			i1 = t_i1;
	    		}
    		}
    	}
    }

    if( isOdd( long_length+short_length ) ){
    	if( i2<short_length ){    // odd output the middle
    		return nums_short[i2] < nums_long[i1] ? nums_short[i2] : nums_long[i1];
    	}else{
    		return nums_long[i1];
    	}
    }else{   // even : output the half sum of the middle two
    	if( i2<short_length ){
    		if(nums_short[i2] < nums_long[i1]){
    			if(i2+1 <short_length){
    				var temp = nums_long[i1] <nums_short[i2+1] ? nums_long[i1] :nums_short[i2+1];
    				return (temp + nums_short[i2])/2;
    			}else{
    				return (nums_long[i1] + nums_short[i2])/2;
    			}
    		}else{
    			temp = nums_long[i1+1] < nums_short[i2] ? nums_long[i1+1] : nums_short[i2];
    			return (temp + nums_long[i1])/2;
    		}
    	}else{
    		return (nums_long[i1] + nums_long[i1+1])/2;
    	}
    }
};

function isOdd(num){
	return num%2 ? true : false;
}

function half(num){
	return isOdd(num) ? (num-1)/2 : (num)/2;
}