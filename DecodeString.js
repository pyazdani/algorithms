function decode(str){
    var newStr = "";
    str += "";
    for(var i = 0; i < str.length - 1; i+=2){
        for(var j = parseInt(str[i+1]); j > 0; j--){
            newStr += str[i];
        }
    }
    return newStr;
}