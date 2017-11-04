function missingValue(arr){
    var min = arr[0];
    var max = arr[0];

    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    for(var j = 0, k = arr.length - 1; j < arr.length, k >= 0; j++, k-- ){
        if(arr[j] == min + 1){
            min = arr[j];
            j = -1;
        }
        if(arr[k] == max -1){
            max = arr[k];
            k = arr.length;
        }
        if(k == arr.length - 1){
            return min + 1;
        }
        if(k == 0){
            return max-1;
        }
    }
}