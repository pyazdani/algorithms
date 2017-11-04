function rBinarySearch(arr, val){
    return memo(arr, 0, arr.length -1, val);
}

//helper function

function memo(arr, left, right, val){
    var half = Math.floor((left+(right-left / 2)));
    if(half == val){
        return true;
    }
    if(half <= val){
        var left = half;
    }
    else{
        var right = half;
    }

    if(right-left === 1){
        if(right === val || left === val){
            return true;
        }
        else{
            return false;
        }
    }
    return memo(arr, left, right, val);
}