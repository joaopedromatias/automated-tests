import { add } from "./add";

//inicio do teste
it('should summarize the parameters', () => {
    // arrange
    const n1 = 2
    const n2 = 3 
    
    // act
    const res = add(n1, n2);

    //assert
    expect(res).toBe(5);
    expect(typeof res).toBe('number')
});

it('should return NaN if there is only one string parameter', () => { 
    const n1 = 'invalid'
    const n2 = 2

    const result = add(n1,n2)

    expect(result).toBeNaN()
})

it('should throw error if both parameters are strings', () => { 
    const functionToTest = () => { 
        add('teste', 'teste2');
    } 

    expect(functionToTest).toThrow();

})