import { castNumber } from "./castNumber";

it('should return a number if a numeric string is passed', () => { 
    const param = '3'

    const result = castNumber(param)

    expect(typeof result).toBe('number')
    expect(result).toBe(3)
})

it('should return a number if a number is passed', () => { 
    const param = 2;

    const result = castNumber(param);

    expect(typeof result).toBe('number')
})

it('should return a number if a bool is passed', () => { 
    const param = true;

    const result = castNumber(param);

    expect(typeof result).toBe('number');
})

it('should return 0 if an empty array is passed', () => { 
    const param = [];

    const result = castNumber(param);

    expect(result).toBe(0);
})

it('should return NaN if an invalid parameter is passed', () => { 
    const invalidParam1 = 'test';
    const invalidParam2 = [1,2];
    const invalidParam3 = {};
    const invalidParam4 = () => {};

    const result1 = castNumber(invalidParam1);
    const result2 = castNumber(invalidParam2);
    const result3 = castNumber(invalidParam3);
    const result4 = castNumber(invalidParam4);

    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
    expect(result3).toBeNaN();
    expect(result4).toBeNaN();
})