import { User } from './hook'

describe('User', () => { 

    const email = 'test@test.com';
    let user = new User(email);

    beforeAll( () => { 

    })

    beforeEach( () => {
     
    })

    afterEach(() => { 
        user = new User(email);
    })

    afterAll(() => { 

    })

    it.concurrent('should assign the email in the construction', () => { 
        
        expect(user.email).toBe(email);
    })

    it.concurrent('should clear the email', () => { 
    
        user.clearEmail()
        expect(user.email).toBe('');
    })

    it.concurrent('should update the email', () => { 
        
        const newEmail = 'test2@test.com';
        user.updateEmail(newEmail)
        expect(user.email).toBe(newEmail);
    })
})