this.isPal = function(){
    var pointer = this.head;
    var chars = "";

    while(pointer){
        chars += pointer.val;
        pointer = pointer.next;
    }
    for(var i = 0, j = chars.length-1; i < j; i++, j--){
        if(chars[i] != chars[j]){
            return false;
        }
    }
    return true;
}


this.pal = function(){
    var pointer = this.head;
    var temp = null;
    var length = 0;
    var i = 0;

    while(pointer){
        length ++;
        pointer = pointer.next;
    }

    while(i < length / 2){
        for(var j = length - 1 - i; j > 0; j--){
            pointerJr = pointerJr.next;
        }
        if(pointer.val != pointerJr.val){
            return false;
        }
        pointer = pointer.next;
        i++;
    }
    return true;
}