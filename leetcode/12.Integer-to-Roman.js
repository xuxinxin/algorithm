/**
 * @param {number} num
 * @return {string}
 */
 // 复杂的方式
var intToRoman = function(num) {
    var outArray = [];
    if(num/1000>=1){
        var m = ((num/1000)>>0);
        for(var i = 0; i<m ; i++){
            outArray.push('M');
        }
        num = num-m*1000;
    }
    if(num >= 900){
        outArray.push('CM');
        num = num-900;
    }
    if(num >= 500){
        outArray.push('D');
        num = num-500;
    }
    if(num >=400){
        outArray.push('CD');
        num = num-400;
    }
    if(num >= 100){
        var c = (num/100)>>0;
        for(i=0; i<c; i++){
            outArray.push('C');
        }
        num = num-c*100;
    }
    if(num >= 90){
        outArray.push('XC');
        num = num-90;
    }
    if(num >= 50){
        outArray.push('L');
        num = num-50;
    }
    if(num >= 40){
        outArray.push('XL');
        num = num-40;
    }
    if(num >= 10){
        var x = (num/10)>>0;
        for(i=0;i<x;i++){
            outArray.push("X");
        }
        num = num - x*10;
    }
    if(num === 9){
         outArray.push("IX");
          num = num - 9;
    }
    if(num>=5){
        outArray.push('V');
        num = num-5;
    }
    if(num === 4){
         outArray.push("IV");
          num = num - 4;
    }
    for(i=0;i<num;i++){
        outArray.push('I');
    }
    return outArray.join('');
};