function rFib(num){
    if(typeof num == "double"){
        Math.floor(num);
    }
    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    return rFib(num -1)+rFib(num-2);
}