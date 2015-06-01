/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for(var i = 0 ; i<s.length ; i++ ){
        if(s[i]==='(' || s[i]==='{' || s[i]==='['){
            stack.push(s[i]);
        }else{
            var flag;
            switch(s[i]){
                case ')':
                    flag = stack.pop()==='(';
                    break;
                case '}':
                    flag = stack.pop()==='{';
                    break;
                case ']':
                    flag = stack.pop()==='[';
                    break;
            }
            if(flag === false){
                return false;
            }
        }
    }
    return stack.length === 0;
};