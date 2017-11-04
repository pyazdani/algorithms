function breakLoop(SLL){
    walker = this.head;
    ump = this.head;
    runner = this.head;

    while(runner){
        if(runner.next == null){
            return false;
        }
        walker = walker.next;
        runner = runner.next.next;
        if(walker == runner){
            ump = ump.next;
        }
        if(ump == walker || ump == runner){
            var pointer = ump.next;
            while(pointer){
                if(pointer.next == ump){
                    pointer.next = null;
                    return SLL;
                }
                else{
                    pointer = pointer.next;
                }
            }
        }
    }
}