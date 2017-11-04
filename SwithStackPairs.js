function switchPairs(stack){
    var queue = new queue();
    var count = stack.size();
    if(count % 2 == 1){
        queue.enqueue(stack.pop());
    }

    while(!stack.isEmpty()){
        var temp = stack.pop();
        if(temp == stack.top()-1 || temp == stack.top()+1){
            queue.enqueue(stack.top());
            queue.enqueue(temp);
        }
        else{
            queue.enqueue(temp);
            queue.enqueue(stack.top());
        }
    }
    while( !queue.isempty()){
        for(var i = 0; i < queue.size()-1; i++){
            queue.enqueue(queue.dequeue());
        }
        stack.push(queue.dequeue());
    }
    return stack;
}