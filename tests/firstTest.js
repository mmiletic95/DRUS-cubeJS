var firstTest= require('./../src/firstFunction');
var simpleAdd=firstTest.simpleAdd();

describe("Test first function", ()=>
{
    it('Test without parameters', () =>
    {
        expect(simpleAdd()).toBe('wrong number of parameters');
    });
    it ('Test with 1 parameter', () => 
    {
        expect(simpleAdd(5)).toBe('wrong number of parameters');
    });
    it ('Test with more than 2 parameters',()=>
    {
        expect(simpleAdd(5,4,6)).toBe('wrong number of parameters')
    });
    it ('Test is parameter numeric value',()=>
    {
        expect(simpleAdd('a',7)).toBe('parameters must be numeric value');
    });
    it ('Test is parameter numeric value',()=>
    {
        expect(simpleAdd(5,'7')).toBe('parameters must be numeric value');
    });
    it ('Test with correct input',()=>
    {
        expect(simpleAdd(5,7)).toBe(12);
    });
    it ('Test with correct input',()=>
    {
        expect(simpleAdd(2,12)).toBe(14);
    });
});