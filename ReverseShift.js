function reverse(arr, shiftBy){
    var temp;
    count = 0;
    while(count < shiftBy){
        temp = arr[arr.length -1];
        arr.length--;
        for(var i = arr.length -1; i > 0; i--){
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
        count ++;
    }
    return arr;
}