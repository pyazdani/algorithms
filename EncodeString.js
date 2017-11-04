
function encode(str){
    str += "";
    var newStr = "";
    var count = 1;

    for(var i = 0 ; i < str.length; i++){
        if(str[i] == str[i+1]){
            count ++;
        }
        else{
            newStr += str[i];
            newStr+= count;
            count = 1;
        }
    }
    if(str.length == newStr.length){
        return str;
    }
    return newStr;
}