export const add = (n1, n2) => { 
    if (typeof n1 === 'string' && typeof n2 === 'string') { 
        throw 'parameters cannot be strings'
    }
    return typeof n1 === 'number' && typeof n2 === 'number' ? n1 + n2:NaN
}