function reverse(arr){

    if (arr.length < 1){
        return false;
    }
    if(arr.length == 1){
        return arr;
    }

    for(var i = 0, j = arr.length-1; i <= arr.length/2, j>= arr.length/2; i++, j--){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}