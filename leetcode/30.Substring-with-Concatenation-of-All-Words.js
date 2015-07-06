/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}

var findSubstring = function(s, words) {
    if(s.length === 0 || words.length === 0){
        return [];
    }
    var wordCount = {}
    for(var i =0;i<words.length;i++){
        wordCount[words[i]] = wordCount[words[i]] || 0;
        wordCount[words[i]]++;
    }
    var LEN = words[0].length;
    var pStart = 0,
        pEnd   = words.length * LEN-1;

    var ret = [];
    while(pEnd< s.length){
        var tempWords = {}
        for (var i = 0; i < words.length; i++) {
            var newWord = s.substring(pStart+i*LEN,pStart+(i+1)*LEN);
            tempWords[newWord] = tempWords[newWord] || 0;
            tempWords[newWord]++;
            if(wordCount[newWord] === undefined || tempWords[newWord]>wordCount[newWord]){
                break;
            }
        }
        if(i === words.length){
            ret.push(pStart);
        }
        pStart++;
        pEnd++;
    }
    return ret;
};
*/
var findSubstring = function(s, words) {
    var l = s.length,
        cnt = words.length;
    if(l===0 || cnt ===0){
        return [];
    }
    var dic ={};
    var ret;
    for(var i=0; i<cnt; j++){dic[words] = dic[words] ? dic[words]++ : 1;}
    var wl = words.length;
    for (var i = 0; i < wl; i++) {
        var tdic = {};
        var count = 0;
        var left =i;
        for(var j=i;j<=l-wl;j=j+wl){
            var str = s.substring(j,j+wl);
            if(dic[str]){
                tdic[str] = tdic[str] ? tdic[str]++ : 1;
                if(tdic[str] <= dic[str] ){
                    count++;
                }else{
                    while(tdic[str] > dic[str]){
                        var str1 = s.substring(left,left+wl);
                        tdic[str1]--;
                        if(tdic[str1]<dic[str1]) count--;
                        left+=wl;
                    }
                }
                if(cnt === count){
                    ret.push(left);
                    tdic[s.substring(left,wl+left)]--;
                    count--;
                    left+=wl;
                }
            }else{
                tdic={};
                count = 0;
                left = j+wl;
            }
        }
    }
    return ret;
}
