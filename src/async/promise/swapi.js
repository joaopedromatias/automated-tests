import axios from "axios";

export const checkName = (res, param) => { 
    const promise = new Promise((resolve, reject) => {
        if (res === 'Luke Skywalker' && param === 1) { 
            resolve('fine!');
        } else { 
            reject('wrong!');
        }
    })
    return promise
}

export const getName = async (param) => { 
    const res = await axios.get(`https://swapi.dev/api/people/${param}`);
    
    let check = ''

    try { 
     check = await checkName(res.data.name, param);
    } catch (err) { 
        check = err
    }
    
    if (check === 'fine!') { 
        return 'Luke Skywalker'
    } else { 
        throw 'error!'
    }
        
    
}