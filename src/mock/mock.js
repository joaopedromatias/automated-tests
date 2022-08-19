import path from 'path'

export const execute = (...args) => { 
    return path.join(...args)
}