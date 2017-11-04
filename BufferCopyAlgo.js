function bufferCopy (sourceArr, destArr, sourceInd, destInd, numVal){

    var remNumDest = destArr.length - destInd;
    var remNumSource = sourceArr.length - sourceInd;

    if(remNumDest > remNumSource){
        if(numVal >= remNumDest){
            numVal = remNumDest;
        }
    }
    else{
        if(numVal >= remNumSource){
        numVal = remNumSource;
        }
    }

    for(var i = sourceInd, j = destInd; i <(sourceInd + numVal), j <(destInd + numVal); i++, j++){
        destArr[j] = sourceArr[i];
    }

    return destArr;
}

bufferCopy([1,2,3,4,5,6], [10,12,14,16,17,18,20,24], 4, 6, 4);