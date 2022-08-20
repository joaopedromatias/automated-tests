# Automated Testing 

The main goal of automated testing is to check whether the application will work (and keep working after some change) as expected or not. It provides lot of more `reliability` and `consistency` to the project and practicality to developers.

## Manual Testing

- painful
- slow
- no warranty everything is working fine

## Automated Testing

write code to automatically test another code

- initial effort only
- consistent
- more scenarios tested

`Unit testing` and `integration testing` are types of automated tests.

Unit -> building blocks of an app, ideally, the smallest building blocks
Building Blocks -> mostly functions and classes (also components in React)

Aplication = unit + unit + unit + unit + ... + unit

- Unit testing: test individuals building blocks of app (units)
- Integration testing: test the combination of the units. Even if the unit tests works, the app can brake if the units are not correctly combined
- End-to-End (E2E) testing: test entire flows and application features, like the real users would do

#### Benefits

- avoid endless manual testing 
- easier to cover our entire codebase running the test scripts
- after any code changes, the tests tell us if it broke something in an unit
- write better code

Unit < Integrations < E2E 

## TDD - Test Driven Development

It is a framework/philosophy for software development. 

test is write first than the feature itself

## What to test

We must only test our own code, excluding third party and language built-ins.

## Writing tests 

<script>
it("what i'm testing and what are the expectations", () => { 
    const result = add(1,2); 
    expect(result).toBe(3); 
})
</script>

## AAA - Arrange, Act, Assert 

- Arrange -> define the test env and values 
- Act -> runs the test
- Assert -> evaluate the result

<script>
it("what i'm testing and what are the expectations", () => { 
    // Arrange 
    const n1 = 1;
    const n2 = 2;
    const resultExpected = n1 + n2;

    // Act
    const result = add(n1,n2); 

    // Assert 
    expect(result).toBe(resultExpected); 
    expect(res).toBeTypeOf('number'); 
})
</script>

## Testing Errors 

In javascript the errors are not stored in variables, but they are throw. That's why writing tests that test error a little bit different:

<script>
it('should throw error if both parameters are strings', () => { 
    const functionToTest = () => { 
        add('test', 'test2');
    }    

    expect(functionToTest).toThrow();
})
</script>

It is also possible to do with try catch

## not property

<script>
expect(functionToTest).not.toThrow();
</script>

## Tests Suites

<script>
// validateNumber.test.js

describe('validateNumber()', () => { 
    it('should expect to throw error if a non number is passed', () => { 
        const value = 'f'
        const resultFunc1 = () => validateNumber(value);
        expect(resultFunc1).toThrowError('invalid number input')
    })
    
    it('should expect not to throw error if a number is passed', () => { 
        const value = 1
        const resultFunc1 = () => validateNumber(value);
        expect(resultFunc1).not.toThrow()
    })
})
</script>

## Writing good tests

- keep tests simple
- AAA model
- test 1 functionality by test

## Integration Tests

Integration Tests: testing the combination of two or more units

## toBe vs. toEqual

'v' === 'v' -> always true
1 === 1 -> always true
[] === [] -> always false 
(()) => {}) === (() => {}) -> always false`

- Objects are references to spaces in memory, while primitive data types (string, bool, number) do not

The `toEqual()` method checks the values, and not also the memory space like the `toBe()`

## Asynchronous Callbacks

Many times when working with asynchronous callbacks it's needed to use the try catch blocks along with the `first parameter` of the `it` function, due to the fact that errors inside async callbacks are not detected by default.

The parameter, often assigned with `done`, tells the test runner that the test is finished.

The try block execution stops when an error is thrown, that's why the `done()` of it is not readen when there are errors. In this case the `done(err)` of the catch block is readen and executed.

```javascript
describe('asyncCallbackFn()', () => { 

    it('should resolve with Darth Vader if the parameter is 4', (done) => { 
        const param = 4
        const callbackFn = (characterName) => { 
            try {
                expect(characterName).toBe('Darth Vader'); //if this fails it will throw an error
                done();
            } catch(err) { 
                done(err); // we can see the error if this is executed
            }
        }

        asyncCallbackFn(param, callbackFn);
    })

    it('should throw error if first parameter is not numeric', async () => {
        
        // async functions will return a promise

        const characterNumber = 'hi'
        const callbackFn = () => {
            console.log(`i'm the callback code`);
        }

        const fn = () => asyncCallbackFn(characterNumber,callbackFn); 
        
        await expect(fn).rejects.toBe('parameter should be numeric') // since it's a async function we can omit the return statement in front of the expect method
        
        // If it was not an async function, the return statement would make jest wait the promise
        // return expect(fn).rejects.toBe('parameter should be numeric')
    })
})
```

```javascript
// checkText.js

export const checkText = (text, callback) => { 
    if (text==='right') { 
        callback(1);
    } else { 
        callback(0);
    }
}

// checkText.test.js

import { checkText } from "./checkText";

describe('checkText()', () => { 

    it('callback param should be 1 if text is rigth', () => { 
        
        const text = 'right';

        // we call the tested function passing a new callback

        checkText(text, (param) => { 
            expect(param).toBe(1); // works without the done because it's sync
        }
        // executes the function
        )
    })
 
    it('callback param should be 0 if text is not rigth', () => { 

        const text = 'something';

        checkText(text, (param) => { 
            expect(param).toBe(0);
        })
    })
})
```

## Promises 

```javascript
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
// in async functions it is not necessary the 'return' because they always return a promise
})
```

## Hooks 

Functions that are automatically executed by test runners that aids in the test logic, by setting and reseting the variable values along the tests.

```javascript
const email = 'test@test.com';
    let user = new User(email);

    beforeAll( () => { // executed before initialization of tests

    })

    beforeEach( () => { // executed before each test
     
    })

    afterEach(() => { // executed after each test
        user = new User(email);
    })

    afterAll(() => { // executed after all tests

    })
```

## Test Side Effects 

Example: test a function that creates a file in the directory would actually create a file, which is not desirable

Example: send requests to the backend during the tests might be dangerous, since it can post wrong data in the database.

To get rid of side effects we use: `mocks`

[Mocks]: we replace the original function code to a new one. It becomes by default a spied function.

[Spies]: wrappers that provides the ability to evaluate if a function was called, how many times, which parameters where used, etc. 

### Spies 

```javascript
it('should call the function passed as a callback with the right parameters', () => { 
        const logger = jest.fn(); // creates an empty spied function 
        const logger = jest.fn( () => { 
            // new function code
         }); // creates a non empty spied function

        // jest.fn(implementation) is a shorthand for jest.fn().mockImplementation(implementation).
        
        callCallback(logger);

        expect(logger).toBeCalled(); // tests whether the function was callled or not
        expect(logger).toBeCalledWith('parameter'); // tets the parameters
    })
```

### Automocking

```javascript 
jest.mock('axios') // all axios functions will be replaced to empty spy functions, so it will not actually work on the code like the original axios methods do

it('should ', () => { 
    // ...
})
```

Mocking impacts only the tests files!

### Custom Mocking

We've turned all the module functions into empty functions above, but that's not the case we want all the times

```javascript

//file.test.js

jest.mock('path', () => { 
    return {
            join: (...args) => { // gathers all the parameters in an array
                
                return args[args.length-1] // returns the last argument
            }
    }
})
```

Instead of mock direct on the test file we can custom mock module functions in a folder called `__mocks__`. If we want to mock axios functions, we do a file axios.ts inside the folder.

```javascript
//__mocks__/fs.js

const path = { 

    join: (...args) => { // gathers all the parameters in an array

        return args[args.length - 1] // returns the last argument

    }
}

export default axios

// mock.test.js

import { execute } from './mock'

jest.mock('path') // this line is required so the test runner search the module in the mocks folder

describe('execute', () => { 
    it('should return the last parameter passed', () => { 
        const param1 = 1;
        const param2 = 2;
        const param3 = 3;
        
        const result = execute(param1, param2, param3)

        expect(result).toBe(3)
    })
})
```

We also can mock a function only once, like following:

```javascript
const mockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

mockFn(); // 'first call'
mockFn(); // 'second call'
mockFn(); // 'default'
mockFn(); // 'default'
```

## Mocking Globals 

inside the test suite, we do like following (it will only change the method inside the test suite, since each of them run on its own environment):

```javascript
jest.spyOn(Math, 'random').mockImplementation(() => {
        console.log('mocked random method');
    });

afterEach(() => { 
    jest.restoreAllMocks() // this method restores all the mocks created by spyOn
})
```

It's different to mock a third party, built-in or custom module and to mock a global method. To mock a global method in Jest we can do like shown above.

## Testing the DOM

### Creating the DOM

We need to use a different test environment in order to test the DOM assertively.

The default is NodeJS envrionment, in which of course there are no window browser object

Jest emulates the DOM environment with jsdom environment by running the CLI command with flag --evn=jsdom

It requires the install of jest-environment-dom package

We can both manually and dynamically create a virtual DOM document to test in it. In most times it is better to do it dynamically using the real index.html file

### Testing the DOM

```javascript 
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
```