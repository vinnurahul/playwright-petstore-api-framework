import {test, expect} from '../../fixtures/apiFixtures.js'

import userData from '../../testdata/api/userData.json'

test.describe('Delete User API', { tag: ['@api'] }, () =>
{
    test('Delete User API', async ({ createUserService, deleteUserService }) =>
    {
        // Test implementation here
        const newUser = userData.newUser
        const createresponse = await createUserService.createUser(newUser)
        //Check status
        expect(createresponse.status()).toBe(200)
        expect(createresponse.statusText()).toBe('OK')
        const response = await deleteUserService.deleteUser(newUser.username)
        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe('OK')
    });
});