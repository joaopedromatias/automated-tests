import { subtract } from './subtract'

it('should subtract the parameters', () => { 
    const n1 = 5;
    const n2 = 3;

    const result = subtract(5,3);

    const expectResult = n1 - n2;
    expect(result).toBe(expectResult);
}) 

it('should return NaN if there is only one string parameter', () => { 
    // arrange
    const n1 = 'invalid';
    const n2 = 10;

    // act
    const result = subtract(n1,n2);

    // assert
    expect(result).toBeNaN();
})

it('should throw an error if both parameters are strings', () => { 
    const first = 'abc'
    const second = 'def'
    
    const functionToTest = () => { 
        subtract(first, second);
    }

    expect(functionToTest).toThrow('parameters cannot be strings')
})