import { createDiv, appendDiv } from './dom'
import fs from 'fs'
import path from 'path'

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlContent = fs.readFileSync(htmlDocPath).toString();

describe('dom', () => { 

    beforeEach(() => { 
        // dynamically assign the real DOM content before each test
        window.document.write(htmlContent)
    })

    describe('assigning DOM', () => { 
    
        it ('should return Hello World!!!', () => {  
            
            const paragraphElementText = document.querySelector('#text').textContent;
            
            expect(paragraphElementText).toBe('Hello world!!!')
        })
    })
    
    describe('createDiv()', () => { 
    
        it ('should return a defined object', () => {  
            expect(createDiv()).toBeDefined()
        })
    
        it ('should return a defined object with text hello', () => { 
            expect(createDiv().textContent).toBe('hello')
        })
    })

    describe('appendDiv()', () => { 

        afterEach(() => { 
            console.log(document.body.innerHTML) // show us the DOM after each test so we can see if the apend div is actually working in the same document we've declared before
        })

        it('should append the div', () => { 
            appendDiv();

            expect(document.getElementById('new-div').textContent).toBe('hello')
        })
    })

})