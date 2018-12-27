function simpleAdd(a, b){
    if (arguments.length != 2){
        return 'wrong number of parameters';
    }else if (typeof a != 'number' || typeof b != 'number'){
        return 'parameters must be numeric value'
    } else{
        return c = a + b;
    }
    
}

module.exports={simpleAdd};