import { execute } from './mock'

jest.mock('path')

describe('execute', () => { 
    it('should return the last parameter passed', () => { 
        const param1 = 1;
        const param2 = 2;
        const param3 = 3;

        const result = execute(param1, param2, param3)

        expect(result).toBe(3)
    })
})