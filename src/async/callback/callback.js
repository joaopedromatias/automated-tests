import axios from "axios";

export const asyncCallbackFn = async (characterNumber, callback) => { 

    if (typeof characterNumber !== 'number') { 
        throw 'parameter should be numeric'
    }

    const response = await axios.get(`https://swapi.dev/api/people/${characterNumber}`)
    const characterName = response.data.name

    callback(characterName)
}

export const syncCallbackSillyFn = (text, callback) => { 
    if (text==='right') { 
        callback(1);
    } else { 
        callback(0);
    }
}