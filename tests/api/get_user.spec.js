import {test, expect} from '../../fixtures/apiFixtures'

import userData from '../../testdata/api/userData.json'

test.describe('Get User API', { tag: ['@api'] }, () =>
{
    test('Get User API', async ({ createUserService, getUserService }) =>
    {
        // Test implementation here
        const newUser = userData.newUser
        const createresponse = await createUserService.createUser(newUser)
        //Check status
        expect(createresponse.status()).toBe(200)
        expect(createresponse.statusText()).toBe('OK')
        

        const response = await getUserService.getUser(newUser.username)
        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe('OK')
        //Check body
        const responseBody = await response.json()
        expect(responseBody.username).toBe(newUser.username)
    });
});