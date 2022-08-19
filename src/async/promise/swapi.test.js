import { checkName, getName } from "./swapi";

describe('checkName()', () => { 

    it('should resolve fine if param is 1 and name is Luke Skywalker', () => { 
        const res = 'Luke Skywalker';
        const param = 1;

        return expect(checkName(res, param)).resolves.toBe('fine!')
    })

    it('should reject wrong if param is not 1', () => { 
        const res = 'a';
        const param = 8;

        return expect(checkName(res, param)).rejects.toBe('wrong!')
    })

})

describe('getName()', () => { 

    it('should return Luke Skywalker if value is one', async () => { 
        const param = 1;

        const res = await getName(param);

        expect(res).toBe('Luke Skywalker');
    })


    it('should return null if parameter is different than 1', async () => { 
        const param = 2 

        try { 
            await getName(param)
        } catch (err) { 
            expect(err).toBe('error!')
        }
        
    })

})