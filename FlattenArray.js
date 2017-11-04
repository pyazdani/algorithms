function flatten(arr){

    var newArray = [];

    for(var i = 0; i < arr.length; i ++){
        if(typeof arr[i] == "number" || typeof arr[i] == "string"){
            newArray.push(arr[i]);
        }
        if(Array.isArray(arr[i])){
            console.log("recognized array");
                for(var j = 0; j < arr[i].length; j ++){
                console.log("inside for loop");
                if(arr[i][j] != null){
                    newArray.push(arr[i][j]);
                }
            }
        }
    }
    return newArray;
}


var arr = [1,2,[3,4,5],[],2];

flatten(arr);