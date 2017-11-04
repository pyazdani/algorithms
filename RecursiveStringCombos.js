function rSubStr(str){
    var arr = [];
    StringHelper(st, "", arr);
    return arr;
}

//helper function

function StringHelper(str, sub, arr){
    if(str.length == 0){
        arr.push(sub);
    }
    else{
        StringHelper(str.substring(1), sub+str[0], arr);
        StringHelper(str.substring(1), sub, arr);
    }
}