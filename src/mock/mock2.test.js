import { generateRandom } from "./mock2";

describe('sendData()', () => {

    jest.spyOn(Math, 'random').mockImplementation(() => {
        console.log('mocked random method')
    });


    it('should return nok', async () => { 
        const result = generateRandom()

        expect(typeof result).toBeNull;
    })
}) 