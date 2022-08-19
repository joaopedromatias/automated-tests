import { integration } from './whole'

describe('integration()', () => { 

    it('should return the sum of two first params subtracted by the third', () => { 
        const n1 = 5;
        const n2 = 2;
        const n3 = 3;

        const output = integration(n1,n2,n3)

        expect(output).toBe(4)
    })
    
    it('should throw error if one of the parameters are not number', () => { 
        const n1 = 5;
        const n2 = '2';
        const n3 = 3;

        const outputFn = () => integration(n1,n2,n3)

        expect(outputFn).toThrow()
    })

})