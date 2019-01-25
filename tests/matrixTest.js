const math= require('mathjs')
var firstTest= require('./../src/matrixFunctions');
var matrixAdd=firstTest.matrixAdd;
var matrixDivide=firstTest.matrixDivide
describe("Test matrix add", ()=>
{
    it ('Test with correct input',()=>
    {
        var expected=math.matrix([[2,4],[6,8]]);
        var calculated=matrixAdd(math.matrix([[1,2],[3,4]]),math.matrix([[1,2],[3,4]]));
        expect(calculated._data).toEqual(expected._data);
    });
});

describe("Test first function", ()=>
{
    it('Test without parameters', () =>
    {
        expect(matrixDivide()).toBe('wrong number of parameters');
    });
    it ('Test with 1 parameter', () => 
    {
        expect(matrixDivide(5)).toBe('wrong number of parameters');
    });
    it ('Test with more than 2 parameters',()=>
    {
        expect(matrixDivide(5,4,6)).toBe('wrong number of parameters')
    });
      it ('Test if first parameter is scalar',()=>
    {
        expect(matrixDivide(5,math.matrix([[1, 2],[1, 2]]))).toBe('Check matrix dimensions')
    }
    )
    it ('Test wrong size of row', ()=>
    {
        expect(matrixDivide(math.matrix([[1, 2, 3],[1, 2, 3], [1, 2, 3]]),math.matrix([[1,2]]))).toBe('Check matrix dimensions');
    }
    )

    it('Test wrong size of column', ()=>
    {
        expect(matrixDivide(math.matrix([[1, 2],[1,2]]),math.matrix([[1],[2],[3]]))).toBe('Check matrix dimensions');
    }
    )
    it('Test if first parameter is column and second is matrix', ()=>
    {
        expect(matrixDivide(math.matrix([[1],[2]]),math.matrix([[1,2],[1,2]]))).toBe('Check matrix dimensions');
    }
    )
    it('Test if first parameter is row and second is matrix',()=>
    {
        expect(matrixDivide(math.matrix([[1, 2]]),math.matrix( [[1,2],[1,2]]))).toBe('Check matrix dimensions');
    }
    )

    it ('Test matrix division by scalar',()=>
    {
        expect((matrixDivide(math.matrix([[1,2], [1,2]]),2))._data).toEqual((math.matrix([[0.5,1],[0.5,1]]))._data);
    })
    it ('Test matrix division by row',()=>
        {expect(matrixDivide(math.matrix([[1,2,3],[1,2,3],[1,2,3]]),math.matrix([[1,2,3]]))).toEqual(math.matrix([[1,1,1],[1,1,1],[1,1,1]]));
    })
    
    it ('Test matrix division by column',()=>
    {
        expect((matrixDivide(math.matrix([[1,2,3,4],[1,2,3,4],[3,3,3,6],[4,4,4,4]]),math.matrix([[1],[2],[3],[4]])))._data).toEqual((math.matrix([[1,2,3,4],[0.5,1,1.5,2],[1,1,1,2],[1,1,1,1]]))._data);
    })
    it ('Test regular division of sq matricies',()=>
    {
        var calculated=matrixDivide(math.matrix([[1,2,3],[4,5,6],[7,8,9]]),math.matrix([[1,0,0],[0,1,0],[0,0,1]]));
        var expected=math.matrix([[1,2,3],[4,5,6],[7,8,9]]);
        expect(calculated._data).toEqual(expected._data);
    })
});