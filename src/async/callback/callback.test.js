import { syncCallbackSillyFn, asyncCallbackFn } from "./callback";

describe('asyncCallbackFn()', () => { 

    it('should resolve with Darth Vader if the parameter is 4', (done) => { 
        const param = 4
        const callbackFn = (characterName) => { 
            try { 
                expect(characterName).toBe('Darth Vader');
                done()
            } catch(err) { 
                done(err)
            }
        }

        asyncCallbackFn(param, callbackFn);
    })

    it('should throw error if first parameter is not numeric', async () => { 
        
        // async functions will return a promise

        const characterNumber = 'hi'
        const callbackFn = () => {
            console.log(`i'm the callback code`);
        }

        const fn = () => asyncCallbackFn(characterNumber,callbackFn); 
        
        await expect(fn).rejects.toBe('parameter should be numeric') // since it's a async function we can omit the return statement in front of the expect method
        
        // If it was not an async function, the return statement would make jest wait the promise
        // return expect(fn).rejects.toBe('parameter should be numeric')
    })
})

describe('syncCallbackSillyFn()', () => { 

    it('callback param should be 1 if text is rigth', () => { 
        const text = 'right';

        syncCallbackSillyFn(text, (param) => { 
            expect(param).toBe(1); 
        })
    })

    it('callback param should be 0 if text is not rigth', () => { 
        const text = 'something';
        syncCallbackSillyFn(text, (param) => { 
            expect(param).toBe(0); 
        })
    })
})