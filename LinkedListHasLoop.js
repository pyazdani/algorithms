function hasLoop(SLL){
    walker = this.head;
    runner = this.head;
    while(runner){
        if(runner.next == null){
            return false;
        }
        walker = walker.next;
        runner = runner.next.next;
        if(runner == walker){
            return true;
        }
    }
    return false;
}