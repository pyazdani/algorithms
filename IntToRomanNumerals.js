function IntToRoman(num){
    var intNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5 ,4 ,1];
    var symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var roman = "";
    var repeat;

    for(var i = 0; num > 0; i++){
        repeat = Math.floor(num / intNum[i]);
        for(var j = 1; j <= repeat; j++){
            roman = roman + symbol[i];
        }
        num = num / intNum[i];
    }
    return roman;
}