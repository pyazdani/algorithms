function rGreatestCommonDenominator(a,b){
    if(a === b){
        return a;
    }
    if(a > b){
        return rGreatestCommonDenominator(a-b, b);
    }
    if(a < b){
        return rGreatestCommonDenominator(a, b-a);
    }
}