function binarySearch(arr, val){
    var left = 0;
    var right = arr.lenght - 1;

    while(right - left > 1){
        var checkIndex = arr[Math.floor(right + 1) + left/2];
        if(arr[checkIndex == val]){
            return true;
        }
        else if(arr[checkIndex] > val){
            right = checkIndex;
        }
        else if(arr[checkIndex] < val){
            left = checkIndex;
        }
    }
    if(arr[right] == val || arr[left] == val){
        return true;
    }
    else{
        return false;
    }
}