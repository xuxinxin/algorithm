/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/* 最直观的方法
var isMatch = function(s, p) {
    if( p.length === 0){
        return s.length === 0;
    }

    if(p.charAt(1) === '*'){
        if( isMatch( s, p.slice(2) ) ) {
            return true;
        }else if(s.length>0 &&( p.charAt(0)===s.charAt(0) || p.charAt(0)==='.')){
            return isMatch(s.slice(1), p);
        }else{
            return false;
        }

    }else if(s.length>0 &&( p.charAt(0)===s.charAt(0) || p.charAt(0)==='.')  ){
        return isMatch(s.slice(1),p.slice(1));
    }else{
        return false;
    }
};
*/
/**最投机取巧的办法
var isMatch = function(s, p) {
    var pattern = new RegExp('^'+p.replace(/\./g, '[\\w]')+'$');
    return pattern.test(s);
}
*/
/*动态规划的方法*/
var isMatch = function(s, p) {
    var dp = [];
        dp[0] =[];
    dp[0][0] = true;
    for( var i=1; i<=s.length; i++ ){
        dp[i] = [];
        dp[i][0] = false;
    }
    for( var j=1; j<=p.length; j++ ){
        dp[0][j] = j>1 && p[j-1] === '*' && dp[0][j-2];
    }
    for( i=1; i<=s.length; i++ ){
        for( j=1; j<=p.length; j++){
            if(p[j-1] !== '*'){
                dp[i][j] = dp[i-1][j-1] && (s[i-1] === p[j-1] || p[j-1] === '.');
            }
            else{
                dp[i][j] = dp[i][j-2] || (s[i-1] === p[j-2] || p[j-2] === '.')&& dp[i-1][j];
            }
        }
    }
    return dp[s.length][p.length];
}
