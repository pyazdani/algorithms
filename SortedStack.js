
function isSorted(stack){
    var newStack = new newStack();
    while(!stack.isEmpty()){
        newStack.push(stack.pop());
        if(newStack.top() > stack.top()){
            return false;
        }
    }
    return true;
}