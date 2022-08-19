export const checkText = (text, callback) => { 
    if (text==='right') { 
        callback(1);
    } else { 
        callback(0);
    }
}