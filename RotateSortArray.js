function rotateSorted(arr){
    var first = arr[0];
    var last = arr[arr.length-1];
    var mid = arr[arr/length / 2];
    var min = 0;
    if( first > last){
        min = last;
        for(var i = arr.length/2 + 1; i < arr.length; i++){
            if(min > arr[i]){
                min = arr[i];
            }
        }
    }
    else{
        min = mid;
        for( var i = 0; i < arr.length/2; i++){
            if(min > arr[i]){
                min = arr[i];
            }
        }
    }
    return min;
}