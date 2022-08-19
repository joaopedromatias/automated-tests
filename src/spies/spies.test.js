import { callCallback } from "./spies";

describe('callCallback()', () => { 
    
    it('should call the function passed as a callback with the right parameters', () => { 
        const logger = jest.fn(); // cria uma função fake que permite ser 'espiada' (spied)
        
        callCallback(logger)
        
        expect(logger).toBeCalled(); 
        expect(logger).toBeCalledWith('parameter');
    })
    
    it('should ', () => { 
        const logger = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first return')
        .mockImplementationOnce(() => 'second return')

        const first = logger()
        const second = logger()
        const third = logger()

        expect(first).toBe('first return')
        expect(second).toBe('second return')
        expect(third).toBe('default')
    })

})
