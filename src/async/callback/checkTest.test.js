import { checkText } from "./checkText";

describe('checkText()', () => { 

    it('callback param should be 1 if text is rigth', () => { 
        const text = 'right';
        checkText(text, (param) => { 
            expect(param).toBe(1); 
        })
    })

    it('callback param should be 0 if text is not rigth', () => { 
        const text = 'something';
        checkText(text, (param) => { 
            expect(param).toBe(0); 
        })
    })
})