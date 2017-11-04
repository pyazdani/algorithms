function remDupes(arr){
    var newArr = [];
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < newArr.length; j++){
            if(arr[i] == newArr[j]){
                count++;
            }
            else{
                continue;
            }
        }
        if(count == 0){
            newArr.push(arr[i]);
        }
        count = 0;
    }
    return newArr;
}