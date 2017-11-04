function rExpansion(str){
    var arr = [];
    var index = 0;
    helpMe(str, arr, "", index);
    return arr;
}

//helper function

function helpMe(str, arr, sub, index){
    if( sub.length == str.length){
        arr.push(sub);
    }
    if(str[index] != '?'){
        sub += str[index];
        helpMe(str, arr, sub, index++);
    }
    else{
        index ++;
        helpMe(str, arr, sub+1, index);
        helpMe(str, arr, sub+0, index);
    }
}