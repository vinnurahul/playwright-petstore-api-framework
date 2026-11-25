import {test,expect} from '../../fixtures/apiFixtures.js'

import userData from '../../testdata/api/userData.json'

test.describe('Create User API', () =>
{
    test('Create User', async ({ createUserService }) =>
    {
        const response = await createUserService.createUser(userData.newUser);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');
        
        const responseBody = await response.json();
        expect(responseBody.code).toBe(200);
        
        expect(responseBody.message).toBe(userData.newUser.id.toString());
    });
});
