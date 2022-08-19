import { add } from "../add/add";
import { subtract } from "../subtract/subtract"

export const integration = (n1,n2,n3) => { 

    var array = [n1, n2, n3]

    for (const number of array) { 
        if (typeof number !== 'number') { 
            throw Error('all parameters should be numbers')
        } 
    }

    const sum = add(n1,n2);;
    const output = subtract(sum, n3);
    
    return output;
}