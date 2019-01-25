const math= require('mathjs')
function matrixAdd(A,B)
{
    var x=math.matrix(math.add(A,B));
    return x;
}

function matrixDivide(A,B)
{
    if (arguments.length != 2){
        return 'wrong number of parameters';
    }

    if (typeof B !='number')
    {
        if (typeof A != 'number')
        {
            if (A._size[0]==B._size[0] && B._size[1]==1)
            {   
            //dijeljenje kolonom
                for(var i=0;i<A._size[1];i++)
                {
                    var col=math.subset(A._data,math.index(math.range(0,A._size[0]),i));
                    var res=math.dotDivide(col,B._data);
                    A._data=math.subset(A._data,math.index(math.range(0,A._size[0]),i),res);
                }
                return A;
            }
            else if (A._size[1]==B._size[1] && B._size[0]==1) 
            {
                // dijeljenje vrstom
                for(var i=0; i<A._size[0];i++)
                {
                    A._data[i]=math.dotDivide(A._data[i],B._data[0]);
                }
                return A;
            }
            else if (B._size[0]==B._size[1] && A._size[0] ==A._size[1] && B._size[0]==A._size[0])
            {
                //klasicno dijeljenje kvadratnih matrica
                return math.matrix(math.divide(A,B));
            }
            else
            {
                return "Check matrix dimensions";
            }
        }
        else
        {
            return "Check matrix dimensions";
        }
    }
    else 
    {
        //dijeljenje bilo cega konstantom
        return math.divide(A,B);
    }
}
module.exports={matrixDivide,matrixAdd};