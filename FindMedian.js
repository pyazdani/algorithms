function findMedian(arr1, arr2){
    var newArr = [];
    var median = 0;
    if(arr1.length >= arr2.length){
        for(var i = 0; i < arr1.length; i++){
            for(var j = 0; j < arr2.length; j++){
                if(arr[i] < arr[j]){
                    newArr.push(arr[i]);
                    i++;
                    j--;
                }
                else{
                    newArr.push(arr[j]);
                }
            }
            newArr.push(arr[i]);
        }
    }
    if(newArr.length % 2 != 0){
        median = newArr[Math.floor(newArr.length/2)];
    }
    else{
        median = (newArr[newArr.length / 2] + newArr[newArr.length/2 -1]) / 2;
    }
    return median;
}