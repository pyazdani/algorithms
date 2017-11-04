function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BST(){
    this.root = null;
    this.add = function(val){
        if(this.root == null){
            this.root = new BSTNode(val);
            return this;
        }
        else{
            var squirrel = this.root;
            while(squirrel){
                if(squirrel.val > val){
                    if(squirrel.left){
                        squirrel = squirrel.left;
                    }
                    else{
                        squirrel.left = new BSTNode(val);
                        return this;
                    }
                }
                else{
                    if(squirrel.right){
                        squirrel = squirrel.right;
                    }
                    else{
                        squirrel.right = new BSTNode(val);
                        return this;
                    }
                }
            }
        }
    }
}

//find Minimum

this.findMin = function(){
    if(this.root == null){
        return false;
    }
    var squirrel = this.root;
    while(squirrel.left){
        squirrel = squirrel.left;
    }
    return squirrel.val;
}

// find Maximum

this.findMax = function(){
    if(this.root == null){
        return false;
    }
    var squirrel = this.root;
    while(squirrel.right){
        squirrel = squirrel.right;
    }
    return squirrel.val;
}

//contains Value

this.containsVal = function(){
    if(this.root == null){
        return false;
    }
    if(this.root == val){
        return true;
    }
    var squirrel = this.root;
    while(squirrel){
        if(val > squirrel.val){
            squirrel = squirrel.right;
        }
        else if( val < squirrel.val){
            squirrel = squirrel.left;
        }
        else if( val == squirrel.val){
            return true;
        }
    }
    return false;
}

//size of BST

this.size = function(){
    var counter = 0;
    helpMe(counter, this.root);
    return counter;
}

//helper function for finding size(recursion)

function helpMe(counter, leaf){
    counter++;
    if(leaf.left == null && leaf.right == null){
        return;
    }
    if(leaf.left){
        helpMe(counter, leaf.left);
    }
    if(leaf.right){
        helpMe(counter, leaf.right);
    }
}

//height of BST

this.height = function(){
    if(this.root == null){
        return 0;
    }
    else{
        var max = 0;
        helpMe(1, max, this.root);
        return max;
    }
}

//helper function for finding height(recursion)

function helpMe(counter, max, squirrel){
    if(squirrel.left){
        helpMe(counter+1, max, squirrel.left);
    }
    if(squirrel.right){
        helpMe(counter+1, max, squirrel.right);
    }
    else{
        if(counter > max){
            max = counter;
        }
    }
}