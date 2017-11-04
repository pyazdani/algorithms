function remDupes(arr){
    var temp = 0;
    var count = 0;

    for(var i = 0; i < arr.length; i++){
        temp = arr[i];
        for(var j = 1; j < arr.length; j++){
            if(arr[j] == arr[i]){
                arr[j] = arr[j+1];
                count++;
                i++
            }
        }
    }
    arr = arr - count;
    return arr;
}