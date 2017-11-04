function remNegatives(arr){
    temp = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            temp = arr[i];
            arr[i] = arr[arr.length-1];
            arr[arr.length -1] = temp;
            arr.length -= 1;
        }
    }
    return arr;
}